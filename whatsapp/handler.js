const config = require("../config");
const commandLoader = require("../lib/commandLoader");
const permissionMiddleware = require("../lib/permissionMiddleware");

async function messageHandler(sock, msg) {
  try {
    // Ignore messages from bot itself
    if (msg.key.fromMe) return;

    // Get message content
    const text = msg.message?.conversation ||
                 msg.message?.extendedTextMessage?.text ||
                 msg.message?.imageMessage?.caption ||
                 msg.message?.videoMessage?.caption ||
                 "";

    if (!text) return;

    // Get sender info
    const sender = msg.key.remoteJid;
    const isGroup = msg.key.remoteJid?.endsWith("@g.us");
    const senderNumber = msg.key.participant || sender;

    // Check if maintenance mode
    if (config.maintenance && senderNumber !== config.owner) {
      return sock.sendMessage(sender, {
        text: "🔧 Bot is under maintenance. Please try again later."
      });
    }

    // Check if message starts with prefix
    if (!text.startsWith(config.prefix)) return;

    // Parse command
    const args = text.slice(config.prefix.length).trim().split(/\s+/);
    const commandName = args[0]?.toLowerCase();

    if (!commandName) return;

    // Check permissions
    const hasPermission = await permissionMiddleware(sock, msg, senderNumber, isGroup);
    if (!hasPermission) {
      return sock.sendMessage(sender, {
        text: "❌ You don't have permission to use this command."
      });
    }

    // Load and execute command
    try {
      const command = commandLoader.getCommand(commandName);
      
      if (!command) {
        return sock.sendMessage(sender, {
          text: `❌ Command \`${commandName}\` not found.\nType \`${config.prefix}menu\` for all commands.`
        });
      }

      // Execute command
      await command.execute(sock, msg, args, {
        sender,
        isGroup,
        senderNumber,
        text,
        args: args.slice(1)
      });

    } catch (error) {
      console.error("Command execution error:", error);
      return sock.sendMessage(sender, {
        text: `⚠️ Error executing command: ${error.message}`
      });
    }

  } catch (error) {
    console.error("Message handler error:", error);
  }
}

module.exports = messageHandler;
