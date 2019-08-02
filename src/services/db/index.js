const sqlite = require('sqlite');
const {path} = require('../../config').db;
const createTablesIfNotExistQueries = require('./queries/create-tables');
const dropTableQueries = require('./queries/drop-tables');

class DataBase {
    constructor() {
        this.initPromise = this.init();
    }

    async init() {
        this.sqlite = await sqlite.open(path);
        await this.createTablesIfNotExist();
    }

    createTablesIfNotExist() {
        const createTablesPromises = createTablesIfNotExistQueries.map(query => this.sqlite.run(query));
        return Promise.all(createTablesPromises)
    }

    dropTables() {
        const dropTablePromises = dropTableQueries.map(query => this.sqlite.run(query));
        return Promise.all(dropTablePromises);
    }
}

module.exports = new DataBase;
