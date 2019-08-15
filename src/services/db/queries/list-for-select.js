const db = require('..');
const { db: { tables } } = require('../../../config');
const resultsToListForSelect = require('../../helpers/results-to-list-for-select');

// TODO: save this results. Reset them only after db-update

module.exports = async () => {
    const { name: tableName } = tables.find(table => table.isDefaultTableForSearchSuggestions);
    const results = await db.sqlite.prepare(`SELECT DISTINCT name, id, year FROM ${tableName}`).all();
    return resultsToListForSelect({tableName, results})
};