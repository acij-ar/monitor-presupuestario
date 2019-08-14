const updateBudgetTables = require('./update-budget-tables');
const db = require('../../db');

module.exports = async () => {
    console.log('Started updating db');
    await db.dropTables();
    await db.createTablesIfNotExist();
    await updateBudgetTables();
    // TODO: wait for all inserts and then close and reconnect to the db?
    console.log('Finished updating db');
};
