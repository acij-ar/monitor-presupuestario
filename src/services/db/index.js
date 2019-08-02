const sqlite3 = require('sqlite3');
const {path} = require('../../config').db;
const createTablesIfNotExistQueries = require('./queries/create-tables');
const dropTableQueries = require('./queries/drop-tables');

class DataBase {
    constructor() {
        this.sqlite = new sqlite3.Database(path, (err) => {
            if (err) {
                console.log(path);
                throw err
            }
        });
        this.createTablesIfNotExist();
    }

    createTablesIfNotExist() {
        this.sqlite.serialize(() => {
            createTablesIfNotExistQueries.map(query => this.sqlite.run(query));
        });
    }

    dropTables() {
        this.sqlite.serialize(() => {
            dropTableQueries.map(query => this.sqlite.run(query));
        });
    }
}

module.exports = new DataBase;
