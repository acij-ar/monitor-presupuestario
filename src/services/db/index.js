const sqlite3 = require('sqlite3');
const { path } = require('../../config').db;

const db = new sqlite3.Database(path, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        throw error
    }
});

module.exports = db;