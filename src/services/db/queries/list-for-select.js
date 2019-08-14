const db = require('..');
const resultsToListForSelect = require('../../helpers/results-to-list-for-select');

// TODO: save this results. Reset them only after db-update

module.exports = async ({table}) => {
    const results = await db.sqlite.prepare(`SELECT DISTINCT name, id, year FROM ${table}`).all();
    return resultsToListForSelect({table, results})
};