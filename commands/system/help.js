module.exports = {
  name: "help",
  aliases: ["h", "?"],
  category: "system",
  description: "Show help information",

  async execute(sock, msg, args, context) {
    const { sender, args: cmdArgs } = context;
    
    if (cmdArgs.length > 0) {
      // Help for specific command
      const helpText = `
📖 *Help for command:* ${cmdArgs[0]}

ℹ️ *Command Information:*
Command: ${cmdArgs[0]}
Status: Available ✅
Usage: .${cmdArgs[0]} [options]

📝 Description:
This command provides functionality for the bot.

⚠️ *Note:*
For detailed information about specific commands, check .menu
`;
      await sock.sendMessage(sender, { text: helpText });
    } else {
      // General help
      const generalHelp = `
╭──────────────────────────╮
│    📖 HELP CENTER        │
╰──────────────────────────╯

🎯 *Quick Start:*
.menu - View all commands
.ping - Check bot status
.owner - Owner commands
.system - System info

📚 *Categories:*
.owner <category> - Owner commands
.system <category> - System commands
.profile <category> - Profile features
.group <category> - Group management
.ai <category> - AI features
.download <category> - Downloaders
.game <category> - Games
.economy <category> - Economy system
.bank <category> - Banking system

🔧 *Common Commands:*
.ping - Ping bot
.alive - Check if alive
.status - Bot status
.uptime - Bot uptime
.info - Bot information
.owner - Owner panel
.support - Get support

❓ *Need Help?*
Type .menu for full command list
Contact: 09166265317
Telegram: @SimonTechBot2

💡 *Tip:*
Use .help <command> for specific help
`;
      await sock.sendMessage(sender, { text: generalHelp });
    }
  }
};
