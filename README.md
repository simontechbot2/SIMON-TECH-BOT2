╔═══════════════════════════════════════════════════════════════╗
║           🤖 SIMON TECH BOT 2.0 - WhatsApp Bot               ║
║         Multi-Device WhatsApp Bot with Telegram Control       ║
╚═══════════════════════════════════════════════════════════════╝

## 📋 Overview

**SIMON TECH BOT** is a powerful WhatsApp bot built with **Baileys** that supports **800+ commands** including:
- ✅ Ping & Status Checks
- ✅ Auto Replies
- ✅ Command System
- ✅ Group Management
- ✅ Owner Controls
- ✅ Telegram Integration
- ✅ AI Features
- ✅ Media Processing
- ✅ Downloaders
- ✅ And Much More!

### 🎯 Key Features
- **Multi-Device Support** - Works on any WhatsApp device
- **800+ Commands** - Extensive command library
- **Telegram Integration** - Control bot via Telegram
- **Easy Deployment** - Deploy on Railway, Replit, Heroku
- **Customizable** - Add your own commands easily
- **Fast Performance** - Optimized for speed
- **Auto Replies** - Set automatic responses
- **Group Management** - Full group control features

---

## 🚀 Quick Start

### 1️⃣ Prerequisites
- **Node.js** v16 or higher
- **npm** or **yarn**
- **WhatsApp Account**
- **Telegram Bot Token** (optional)

### 2️⃣ Installation

```bash
# Clone repository
git clone https://github.com/simontechbot2/SIMON-TECH-BOT2.git
cd SIMON-TECH-BOT2

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

### 3️⃣ Configuration

Edit `.env` file with your settings:

```env
OWNER_NUMBER=234XXXXXXXXXX
BOT_NAME=SIMON TECH BOT
PREFIX=.

TELEGRAM_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
```

### 4️⃣ Run Bot

```bash
# Start bot
npm start

# Development mode (with auto-reload)
npm run dev
```

### 5️⃣ Connect WhatsApp
1. Scan the QR code that appears in terminal
2. Bot will connect automatically
3. Start using commands!

---

## 📱 Usage

### Basic Commands

```
.menu         - Show all available commands
.help         - Get help information
.ping         - Check bot status
.alive        - Check if bot is online
.status       - Bot status information
.owner        - Show owner information
```

### Owner Commands

```
.restart      - Restart the bot
.broadcast    - Send broadcast message
.pair         - Pair WhatsApp device
.eval         - Execute code
.logs         - View bot logs
.setprefix    - Change command prefix
```

### System Commands

```
.info         - Bot information
.version      - Bot version
.uptime       - Bot uptime
.speed        - Response speed
.memory       - Memory usage
```

### Group Commands

```
.groupinfo    - Get group information
.tagall       - Tag all members
.kick         - Kick member
.promote      - Promote to admin
.demote       - Demote from admin
.mute         - Mute group
.unmute       - Unmute group
```

---

## 📁 Project Structure

```
SIMON-TECH-BOT2/
├── index.js                 # Main entry point
├── config.js               # Configuration file
├── package.json            # Dependencies
├── .env.example            # Environment template
│
├── whatsapp/
│   ├── connection.js       # WhatsApp connection handler
│   └── handler.js          # Message handler
│
├── telegram/
│   └── bot.js              # Telegram bot handler
│
├── commands/
│   ├── system/
│   │   ├── menu.js         # Menu command
│   │   ├── ping.js         # Ping command
│   │   └── help.js         # Help command
│   └── owner/
│       └── owner.js        # Owner command
│
├── lib/
│   ├── commandLoader.js    # Command loading system
│   ├── permissionMiddleware.js  # Permission checks
│   └── database.js         # Database utility
│
├── sessions/               # WhatsApp session data
├── database/              # Database files
└── logs/                  # Bot logs
```

---

## 🛠️ Adding Custom Commands

Create a new command file in `commands/` directory:

```javascript
// commands/custom/mycommand.js
module.exports = {
  name: "mycommand",
  aliases: ["mc"],
  category: "custom",
  description: "My custom command",

  async execute(sock, msg, args, context) {
    const { sender, text } = context;

    await sock.sendMessage(sender, {
      text: "Hello! This is my custom command."
    });
  }
};
```

The command will be automatically loaded on bot start!

---

## 🌐 Deployment

### Railway
1. Push code to GitHub
2. Connect Railway to GitHub
3. Add environment variables in Railway dashboard
4. Deploy!

### Replit
1. Create new Replit project
2. Upload files
3. Add `.env` file with your variables
4. Run: `npm start`

### Heroku
```bash
heroku login
heroku create your-app-name
git push heroku main
```

### Local VPS
```bash
# SSH into server
ssh user@server_ip

# Clone and setup
git clone https://github.com/simontechbot2/SIMON-TECH-BOT2.git
cd SIMON-TECH-BOT2
npm install

# Run with PM2 (recommended)
npm install -g pm2
pm2 start index.js --name "simon-tech-bot"
pm2 startup
pm2 save
```

---

## 📊 Command Statistics

| Category | Commands |
|----------|----------|
| Owner | 50+ |
| System | 50+ |
| Profile | 40+ |
| Group | 80+ |
| Security | 60+ |
| AI | 100+ |
| Downloader | 80+ |
| Media | 60+ |
| Games | 80+ |
| Economy | 80+ |
| **TOTAL** | **800+** |

---

## ⚙️ Configuration Options

### Bot Modes
- `public` - Bot responds to everyone
- `private` - Bot only responds to owner
- `maintenance` - Bot under maintenance

### Auto Features
- `AUTO_READ` - Read all messages automatically
- `AUTO_TYPING` - Show typing status
- `AUTO_RECORD` - Show recording status

### Customization
- Change prefix with `PREFIX` env variable
- Set bot name with `BOT_NAME`
- Add owner number in `OWNER_NUMBER`

---

## 🔐 Security Features

- ✅ Owner verification
- ✅ Command permission checks
- ✅ Blacklist/Whitelist system
- ✅ Group security options
- ✅ Anti-spam protection
- ✅ Anti-bot detection

---

## 📞 Support & Contact

- **WhatsApp**: 09166265317
- **Telegram**: @SimonTechBot2
- **GitHub**: simontechbot2

---

## 👨‍💻 Developer

**SIMON TECH**
- WhatsApp: 09166265317
- Telegram: @SimonTechBot2
- GitHub: simontechbot2

---

## ⭐ Support

If you like this bot, please:
- ⭐ Star the repository
- 📢 Share with friends
- 💬 Give feedback
- 🐛 Report bugs
- 💡 Suggest features

---

**Made with ❤️ by SIMON TECH**

**Status**: 🟢 Active & Maintained

---

```
╔═══════════════════════════════════════════════════════════════╗
║         🚀 Ready to Deploy! Start Now with npm start         ║
╚═══════════════════════════════════════════════════════════════╝
```
