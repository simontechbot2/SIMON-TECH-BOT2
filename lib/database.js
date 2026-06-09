const fs = require("fs-extra");
const path = require("path");
const config = require("../config");

const dbPath = config.dbPath;

// Ensure database directory exists
fs.ensureDirSync(dbPath);

class Database {
  constructor(filename) {
    this.filePath = path.join(dbPath, `${filename}.json`);
    this.data = this.load();
  }

  load() {
    try {
      if (fs.existsSync(this.filePath)) {
        const data = fs.readFileSync(this.filePath, "utf-8");
        return JSON.parse(data || "{}");
      }
      return {};
    } catch (error) {
      console.error("Database load error:", error);
      return {};
    }
  }

  save() {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(this.data, null, 2), "utf-8");
      return true;
    } catch (error) {
      console.error("Database save error:", error);
      return false;
    }
  }

  get(key, defaultValue = null) {
    return this.data[key] || defaultValue;
  }

  set(key, value) {
    this.data[key] = value;
    return this.save();
  }

  delete(key) {
    delete this.data[key];
    return this.save();
  }

  has(key) {
    return key in this.data;
  }

  clear() {
    this.data = {};
    return this.save();
  }

  getAll() {
    return this.data;
  }

  setAll(data) {
    this.data = data;
    return this.save();
  }
}

// Predefined databases
const users = new Database("users");
const groups = new Database("groups");
const settings = new Database("settings");
const economy = new Database("economy");
const blacklist = new Database("blacklist");

module.exports = {
  Database,
  users,
  groups,
  settings,
  economy,
  blacklist
};
