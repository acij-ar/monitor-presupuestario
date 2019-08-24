const db = require('..');
const { db: { tables } } = require('../../../config');
const resultsToListForSelect = require('../../helpers/results-to-list-for-select');

// TODO: save this results. Reset them only after db-update

module.exports = () => {
    const table = tables.find(table => table.isDefaultTableForSearchSuggestions);
    const results = db.sqlite.prepare(`SELECT DISTINCT name, id, year FROM ${table.name}`).all();
    return resultsToListForSelect({table, results})
};