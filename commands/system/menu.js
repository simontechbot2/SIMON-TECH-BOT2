module.exports = {
  name: "menu",
  aliases: ["help", "cmd", "commands"],
  category: "system",
  description: "Show all available commands",

  async execute(sock, msg, args, context) {
    const { sender } = context;
    
    const menuText = `
╭──────────────────────────────╮
│    🤖 SIMON TECH BOT 2.0     │
│  ⚡ Online ⚡                │
╰──────────────────────────────╯

├⊷ 👑 OWNER (50 COMMANDS)
├⊷ ⚙️ SYSTEM (50 COMMANDS)
��⊷ 👤 PROFILE (40 COMMANDS)
├⊷ 👥 GROUP (80 COMMANDS)
├⊷ 🔐 SECURITY (60 COMMANDS)
├⊷ 🧠 AI (100 COMMANDS)
├⊷ 📥 DOWNLOADER (80 COMMANDS)
├⊷ 🖼️ MEDIA (60 COMMANDS)
├⊷ 🎮 GAMES (80 COMMANDS)
├⊷ 💰 ECONOMY (80 COMMANDS)
├⊷ 🏦 BANK (40 COMMANDS)
├⊷ 🎭 ANIME (40 COMMANDS)
├⊷ 🔍 SEARCH (40 COMMANDS)
├⊷ 🛠️ TOOLS (50 COMMANDS)
├⊷ 🌐 INTERNET (30 COMMANDS)
├⊷ 🎨 DESIGN (30 COMMANDS)
├⊷ 📚 EDUCATION (30 COMMANDS)
├⊷ ☁️ CLOUD (20 COMMANDS)
├⊷ 🚀 DEVELOPER (20 COMMANDS)

├⊷ 📊 TOTAL COMMANDS: 800+
├⊷ 🤖 BOT TYPE: Multi Device
├⊷ ⚡ VERSION: 2.0.0
├⊷ 👑 OWNER: SIMON TECH
├⊷ 🚀 STATUS: ONLINE 🟢
╰━━━━━━━━━━━━━━━━━━━━━━━╯

📝 Use these prefixes:
.owner - Owner commands
.system - System commands
.profile - Profile commands
.group - Group commands
.ai - AI commands
.game - Games
.download - Downloaders

🔗 Telegram: @SimonTechBot2
📱 WhatsApp: 09166265317
👨‍💻 Developer: SIMON TECH
`;

    await sock.sendMessage(sender, { text: menuText });
  }
};
