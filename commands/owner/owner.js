const config = require("../../config");

module.exports = {
  name: "owner",
  aliases: ["ownerlist", "owners"],
  category: "owner",
  description: "Show owner information",
  ownerOnly: false,

  async execute(sock, msg, args, context) {
    const { sender } = context;
    
    const ownerText = `
╔═══════════════════════════════╗
║     👨‍💻 OWNER INFORMATION        ║
╚═══════════════════════════════╝

👑 *Primary Owner:*
Name: SIMON TECH
WhatsApp: ${config.owner}
Status: Active ✅

🔧 *Bot Information:*
Bot Name: ${config.botName}
Version: ${config.version}
Type: WhatsApp Multi-Device Bot

📱 *Contact:*
WhatsApp: ${config.owner}
Telegram: @SimonTechBot2
Support: Available 24/7

🚀 *Features Maintained By:*
✅ Command System
✅ Database Management
✅ Security Features
✅ Auto-Replies
✅ Integration Services
✅ API Connections

💻 *Technologies:*
Node.js, Baileys, Telegram Bot API

🎯 *Available Services:*
• Custom Bot Development
• Command Creation
• Feature Integration
• Support & Maintenance

📧 *Connect With Owner:*
WhatsApp: Chat directly
Telegram: @SimonTechBot2

⭐ *Rate & Review:*
If you like this bot, share it with friends!

╚═══════════════════════════════╝
`;

    await sock.sendMessage(sender, { text: ownerText });
  }
};
