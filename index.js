const startTelegramBot = require("./telegram/bot");
const { startWhatsApp, getSocket } = require("./whatsapp/connection");
const config = require("./config");
const fs = require("fs-extra");
const path = require("path");

// Ensure required directories exist
const requiredDirs = [
  config.sessionsPath,
  config.dbPath,
  config.logsPath
];

requiredDirs.forEach(dir => {
  fs.ensureDirSync(dir);
});

async function main() {
  console.log("╔════════════════════════════════════╗");
  console.log("║   🤖 SIMON TECH BOT v" + config.version + "       ║");
  console.log("║  WhatsApp Multi-Device Bot         ║");
  console.log("╚════════════════════════════════════╝");
  console.log("");
  console.log("🚀 Starting bot components...");
  console.log("━".repeat(36));

  try {
    // Start WhatsApp Connection
    console.log("📱 Initializing WhatsApp connection...");
    const waSocket = await startWhatsApp();
    console.log("✅ WhatsApp initialized");
    
    // Start Telegram Bot
    console.log("📡 Starting Telegram bot...");
    startTelegramBot();
    console.log("✅ Telegram bot started");

    console.log("━".repeat(36));
    console.log("🟢 BOT IS ONLINE");
    console.log("");
    console.log(`📊 Bot Name: ${config.botName}`);
    console.log(`👑 Owner: ${config.owner}`);
    console.log(`⚙️  Prefix: ${config.prefix}`);
    console.log(`🔧 Mode: ${config.botMode.toUpperCase()}`);
    console.log("");
    console.log("Use .menu to see all available commands");
    console.log("");

  } catch (error) {
    console.error("❌ Error starting bot:", error);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on("SIGINT", () => {
  console.log("\n\n⛔ Bot shutting down gracefully...");
  process.exit(0);
});

process.on("uncaughtException", (error) => {
  console.error("💥 Uncaught Exception:", error);
});

process.on("unhandledRejection", (error) => {
  console.error("💥 Unhandled Rejection:", error);
});

main().catch(console.error);

module.exports = main;
