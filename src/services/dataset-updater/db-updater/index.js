const updateBudgetTables = require('./update-budget-tables');
const updateInflationTable = require('./update-inflation-table');
const db = require('../../db');

module.exports = async () => {
    console.log('Started updating db');
    db.dropTables();
    db.createTablesIfNotExist();
    await updateBudgetTables();
    await updateInflationTable();
    console.log('Finished updating db');
};
