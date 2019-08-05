const db = require('..');

module.exports = async ({entityType, name, year, budgetType}) => {
    const {id} = await db.sqlite.get(`SELECT id FROM ${entityType} WHERE year = ? AND name = ?`, [year, name]);
};
