const Database = require('better-sqlite3');
const {path} = require('../../config').db;

const db = new Database(path);
db.pragma('journal_mode = WAL');

module.exports = db;
