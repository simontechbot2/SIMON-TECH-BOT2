# 📦 Installation Guide - SIMON TECH BOT 2.0

Complete step-by-step installation instructions for all platforms.

---

## 🎯 Prerequisites

Before starting, ensure you have:
- **Node.js** v16 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))
- **WhatsApp Account** (active phone number)
- **Telegram Bot Token** (optional, [Get it](https://t.me/BotFather))

---

## 📥 Installation Steps

### Step 1: Clone Repository

```bash
git clone https://github.com/simontechbot2/SIMON-TECH-BOT2.git
cd SIMON-TECH-BOT2
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages:
- `@whiskeysockets/baileys` - WhatsApp Web connection
- `node-telegram-bot-api` - Telegram integration
- `dotenv` - Environment variables
- `pino` - Logger
- `fs-extra` - File system utilities

### Step 3: Create Environment File

```bash
cp .env.example .env
```

### Step 4: Configure Settings

Edit `.env` file with your information:

```env
# Required
OWNER_NUMBER=234XXXXXXXXXX        # Your WhatsApp number with country code
BOT_NAME=SIMON TECH BOT           # Bot display name
PREFIX=.                          # Command prefix

# Telegram (Optional)
TELEGRAM_TOKEN=YOUR_TOKEN         # Get from @BotFather
TELEGRAM_CHAT_ID=YOUR_CHAT_ID    # Your Telegram chat ID

# Bot Settings
BOT_MODE=public                   # public, private, or maintenance
AUTO_READ=true                    # Auto-read messages
AUTO_TYPING=true                  # Show typing status
AUTO_RECORD=true                  # Show recording status
MAINTENANCE=false                 # Maintenance mode toggle
```

### Step 5: Run the Bot

```bash
# For development (with auto-reload)
npm run dev

# For production
npm start
```

### Step 6: Connect WhatsApp

1. When bot starts, a **QR code** will appear in terminal
2. Open **WhatsApp** on your phone
3. Go to **Settings** → **Linked Devices**
4. Tap **Link a Device**
5. **Scan the QR code** from terminal
6. Wait for connection ✅

---

## 🌐 Platform-Specific Installation

### Railway Deployment

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Railway**
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub"
   - Select your repository
   - Add environment variables in Railway dashboard
   - Deploy!

3. **Start Command**
   - Set to: `npm start`

### Replit Deployment

1. **Create Replit Project**
   - Go to [replit.com](https://replit.com)
   - Click "Create Replit"
   - Choose "Node.js"

2. **Upload Files**
   - Upload all files to Replit
   - Create `.env` file with your settings

3. **Install Dependencies**
```bash
npm install
```

4. **Run Bot**
   - Click "Run"
   - Scan QR code

### Heroku Deployment

1. **Install Heroku CLI**
```bash
# macOS
brew tap heroku/brew && brew install heroku

# Windows/Linux
npm install -g heroku
```

2. **Login & Create App**
```bash
heroku login
heroku create your-app-name
```

3. **Add Procfile**
```
web: npm start
```

4. **Set Environment Variables**
```bash
heroku config:set OWNER_NUMBER=234XXXXXXXXXX
heroku config:set TELEGRAM_TOKEN=YOUR_TOKEN
heroku config:set BOT_NAME="SIMON TECH BOT"
```

5. **Deploy**
```bash
git push heroku main
```

### VPS/Server Deployment

1. **SSH into Server**
```bash
ssh user@your_server_ip
```

2. **Install Node.js**
```bash
# Ubuntu/Debian
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs npm
```

3. **Clone & Setup**
```bash
git clone https://github.com/simontechbot2/SIMON-TECH-BOT2.git
cd SIMON-TECH-BOT2
npm install
cp .env.example .env
```

4. **Edit Configuration**
```bash
nano .env  # Edit your settings
```

5. **Install PM2** (for background running)
```bash
npm install -g pm2
pm2 start index.js --name "simon-tech-bot"
pm2 startup
pm2 save
```

6. **Check Status**
```bash
pm2 status
pm2 logs simon-tech-bot
```

### Docker Deployment

1. **Build Docker Image**
```bash
docker build -t simon-tech-bot .
```

2. **Run Container**
```bash
docker run -d \
  --name simon-tech-bot \
  -e OWNER_NUMBER=234XXXXXXXXXX \
  -e TELEGRAM_TOKEN=YOUR_TOKEN \
  -e BOT_NAME="SIMON TECH BOT" \
  -v $(pwd)/sessions:/app/sessions \
  -v $(pwd)/database:/app/database \
  simon-tech-bot
```

3. **Using Docker Compose**
```bash
docker-compose up -d
```

---

## ✅ Verification

### Check If Bot is Running

1. **Terminal Output**
```
✅ WhatsApp connected successfully
✅ Telegram bot started
🟢 BOT IS ONLINE
```

2. **Test Commands**
   - Send `.ping` in WhatsApp
   - Bot should reply: 🏓 Pong!

3. **Test Telegram** (if configured)
   - Send `/ping` to your Telegram bot
   - Bot should reply with pong message

---

## 🔧 Troubleshooting

### Issue: "Cannot find module"
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: QR Code not appearing
**Solution:**
```bash
# Make sure port is available
# Or run with explicit port
PORT=3000 npm start
```

### Issue: WhatsApp not connecting
**Solution:**
1. Clear sessions folder
2. Rescan QR code
3. Use updated WhatsApp version
4. Check internet connection

### Issue: Telegram not working
**Solution:**
1. Verify TELEGRAM_TOKEN is correct
2. Get token from @BotFather again
3. Check internet connection

### Issue: High memory usage
**Solution:**
```bash
# Restart bot
pm2 restart simon-tech-bot

# Check processes
pm2 monit
```

---

## 📝 First Time Setup Checklist

- [ ] Node.js installed (v16+)
- [ ] Repository cloned
- [ ] Dependencies installed (`npm install`)
- [ ] `.env` file created
- [ ] Configuration updated with your numbers
- [ ] WhatsApp QR code scanned
- [ ] Bot showing "BOT IS ONLINE"
- [ ] Test `.ping` command
- [ ] Telegram bot configured (optional)

---

## 🚀 Next Steps

After successful installation:

1. **Configure Commands** - Customize in `commands/` folder
2. **Set Permissions** - Edit `permissionMiddleware.js`
3. **Add Features** - Create new command files
4. **Setup Database** - Configure in `lib/database.js`
5. **Deploy** - Choose your hosting platform

---

## 💡 Tips

- **Auto-reload during dev:** Use `npm run dev` instead of `npm start`
- **Keep bot running:** Use PM2 on servers
- **Monitor logs:** Check `logs/` folder for errors
- **Backup sessions:** Keep `sessions/` folder backed up
- **Security:** Never share your `.env` file

---

## 📞 Need Help?

- **WhatsApp:** 09166265317
- **Telegram:** @SimonTechBot2
- **GitHub Issues:** Report bugs and features

---

**Happy Botting! 🚀**
