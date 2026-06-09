const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  Browsers
} = require("@whiskeysockets/baileys");
const pino = require("pino");
const config = require("../config");
const messageHandler = require("./handler");
const fs = require("fs-extra");

let sock = null;
const logger = pino({ level: "silent" });

async function startWhatsApp() {
  try {
    // Ensure sessions directory exists
    fs.ensureDirSync(config.sessionsPath);

    const { state, saveCreds } = await useMultiFileAuthState(config.sessionsPath);

    sock = makeWASocket({
      auth: state,
      printQRInTerminal: true,
      browser: Browsers.ubuntu("Chrome"),
      logger: logger,
      syncFullHistory: false
    });

    // Save credentials on update
    sock.ev.on("creds.update", saveCreds);

    // Connection updates
    sock.ev.on("connection.update", async (update) => {
      const { connection, lastDisconnect } = update;

      if (connection === "close") {
        const shouldReconnect =
          lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;

        if (shouldReconnect) {
          console.log("🔄 Reconnecting to WhatsApp...");
          setTimeout(() => startWhatsApp(), 5000);
        } else {
          console.log("❌ WhatsApp logged out");
        }
      } else if (connection === "open") {
        console.log("✅ WhatsApp connected successfully");
        const profile = await sock.user;
        console.log(`📱 Connected as: ${profile.name}`);
      }

      if (update.qr) {
        console.log("📸 Scan QR Code to connect WhatsApp");
      }
    });

    // Handle incoming messages
    sock.ev.on("messages.upsert", async (m) => {
      if (m.type === "notify") {
        for (const msg of m.messages) {
          try {
            await messageHandler(sock, msg);
          } catch (error) {
            console.error("Message handler error:", error);
          }
        }
      }
    });

    // Handle group updates
    sock.ev.on("groups.update", (updates) => {
      console.log("📢 Group update received:", updates);
    });

    // Handle status updates
    sock.ev.on("presence.update", (updates) => {
      // Presence updates
    });

    return sock;
  } catch (error) {
    console.error("WhatsApp connection error:", error);
    throw error;
  }
}

function getSocket() {
  return sock;
}

module.exports = { startWhatsApp, getSocket };
