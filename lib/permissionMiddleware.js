const config = require("../config");

async function permissionMiddleware(sock, msg, senderNumber, isGroup) {
  try {
    // Get the actual sender number
    const sender = senderNumber.split("@")[0];
    const ownerNum = config.owner.replace(/\D/g, "");
    const senderNum = sender.replace(/\D/g, "");

    // Check if owner
    if (senderNum === ownerNum) {
      return true;
    }

    // Check maintenance mode
    if (config.maintenance) {
      return false;
    }

    // Check if blacklisted
    const blacklist = await getBlacklist();
    if (blacklist.includes(senderNum)) {
      return false;
    }

    // Group message checks
    if (isGroup) {
      const groupMetadata = await sock.groupMetadata(msg.key.remoteJid);
      const isAdmin = groupMetadata.participants.find(p => 
        p.id.split("@")[0] === senderNum
      )?.admin;

      // Allow admins in groups
      if (isAdmin) {
        return true;
      }

      // Check if group is activated
      const enabledGroups = await getEnabledGroups();
      if (!enabledGroups.includes(msg.key.remoteJid)) {
        return false;
      }
    }

    return true;

  } catch (error) {
    console.error("Permission check error:", error);
    return false;
  }
}

async function getBlacklist() {
  // Implement database check for blacklist
  return [];
}

async function getEnabledGroups() {
  // Implement database check for enabled groups
  return [];
}

module.exports = permissionMiddleware;
