module.exports = {
  name: "ping",
  aliases: ["p", "test"],
  category: "system",
  description: "Check bot response time",

  async execute(sock, msg, args, context) {
    const { sender } = context;
    const startTime = Date.now();

    const pingMsg = await sock.sendMessage(sender, { text: "🏓 Pinging..." });
    
    const endTime = Date.now();
    const latency = endTime - startTime;

    const responseText = `
🏓 *PONG!*

⚡ *Latency:* ${latency}ms
🌐 *Connection:* Excellent
📊 *Status:* Online
✅ *Response:* Active

${latency < 100 ? "🚀 Ultra Fast" : latency < 300 ? "⚡ Fast" : "📶 Normal"}
`;

    await sock.sendMessage(sender, { text: responseText });
  }
};
