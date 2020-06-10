// TODO: probably this folder should die after data management refactor

const Database = require('better-sqlite3');
const { db: { path }} = require('../../config');

const db = new Database(path);
db.pragma('journal_mode = WAL');

module.exports = db;
