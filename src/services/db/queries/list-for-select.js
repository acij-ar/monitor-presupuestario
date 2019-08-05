const db = require('..');
const resultsToListForSelect = require('../../helpers/results-to-list-for-select');

module.exports = async ({table}) => {
    const results = await db.sqlite.all(`SELECT DISTINCT name, id, year FROM ${table}`);
    return resultsToListForSelect({table, results})
};