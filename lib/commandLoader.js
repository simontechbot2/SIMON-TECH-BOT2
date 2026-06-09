const fs = require("fs-extra");
const path = require("path");

let commands = new Map();

async function loadCommands() {
  const commandsDir = path.join(__dirname, "../commands");
  
  try {
    // Load from all subdirectories
    const categories = fs.readdirSync(commandsDir);
    
    for (const category of categories) {
      const categoryPath = path.join(commandsDir, category);
      
      if (fs.statSync(categoryPath).isDirectory()) {
        const files = fs.readdirSync(categoryPath).filter(file => file.endsWith(".js"));
        
        for (const file of files) {
          try {
            const command = require(path.join(categoryPath, file));
            
            if (command.name) {
              commands.set(command.name, command);
              
              // Add aliases
              if (command.aliases && Array.isArray(command.aliases)) {
                command.aliases.forEach(alias => {
                  commands.set(alias, command);
                });
              }
              
              console.log(`✅ Loaded command: ${command.name}`);
            }
          } catch (error) {
            console.error(`❌ Error loading ${file}:`, error.message);
          }
        }
      }
    }
    
    console.log(`\n📦 Total commands loaded: ${commands.size}`);
    return true;
  } catch (error) {
    console.error("Error loading commands:", error);
    return false;
  }
}

function getCommand(name) {
  return commands.get(name.toLowerCase());
}

function getCommands() {
  return Array.from(commands.values());
}

function reloadCommands() {
  commands.clear();
  return loadCommands();
}

module.exports = {
  loadCommands,
  getCommand,
  getCommands,
  reloadCommands
};
