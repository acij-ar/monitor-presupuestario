const Database = require('better-sqlite3');
const {path} = require('../../config').db;
const createTablesIfNotExistQueries = require('./queries/create-tables');
const { db: { tables } } = require('../../config');
const _ = require('lodash');

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
        _.sortBy(tables, 'dropOrder').map(table =>
            this.sqlite.prepare(`DROP TABLE IF EXISTS ${table.name}`).run()
        );
    }
}

module.exports = new DataBase;
