const sqlite3 = require('sqlite3');
const { path } = require('../../config').db;
const createTablesQueries = require('./queries/create-tables');

class DataBase {
    constructor() {
        this.sqlite = new sqlite3.Database(path, (err) => {
            if (err) {
                console.log(path);
                throw err
            }
        });
        this.createTables();
    }

    createTables() {
        createTablesQueries.map(query => this.sqlite.run(query));
    }
}

module.exports = new DataBase;
