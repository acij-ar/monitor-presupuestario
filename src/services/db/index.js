const Database = require('better-sqlite3');
const {path} = require('../../config').db;
const createTablesIfNotExistQueries = require('./queries/create-tables');
const { db: dbConfig } = require('../../config');

// TODO: improve performance in servhttps://www.npmjs.com/package/better-sqlite3

class DataBase {
    constructor() {
        this.sqlite = new Database(path);
        this.createTablesIfNotExist();
    }

    createTablesIfNotExist() {
        createTablesIfNotExistQueries.map(query => this.sqlite.prepare(query).run());
    }

    dropTables() {
        const statement = this.sqlite.prepare('DROP TABLE IF EXISTS $name');
        dbConfig.tables.map(table => statement.run(table));
    }
}

module.exports = new DataBase;
