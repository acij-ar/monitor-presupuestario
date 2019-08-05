const updateBudgetTables = require('./update-budget-tables');
const updateInflationTable = require('./update-inflation-table');
const db = require('../../db');

module.exports = async () => {
    console.log('Started updating db');
    await db.initPromise;
    await db.dropTables();
    await db.createTablesIfNotExist();
    await updateBudgetTables();
    await updateInflationTable();
    // TODO: wait for all inserts and then close and reconnect to the db?
    console.log('Finished updating db');
};
