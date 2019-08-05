const db = require('..');
const _ = require('lodash');

module.exports = async ({parentTable, parentName, year, budgetType}) => {
    const {id: parentId} = await db.sqlite.get(
        `SELECT id FROM ${parentTable} WHERE year = ? AND name = ?`,
        [year, parentName],
    );
    const title = `${parentName} (${budgetType} ${year})`;
    if (!parentId) {
        return {title};
    }
    const childTable = parentTable === 'jurisdicciones' ? 'programas' : 'actividades';
    const pkColumn = parentTable === 'jurisdicciones' ? 'jurisdiccion_id' : 'programa_id';
    const results = await db.sqlite.all(
        `SELECT name, id, ${budgetType} FROM ${childTable} WHERE year = ? AND ${pkColumn} = ? ORDER BY ${budgetType} DESC`,
        [year, parentId]
    );

    return {
        data: [
            ['name', 'parent', 'value'],
            ['root', null, _.sumBy(results, budgetType)],
            ...results.map(result => [result.name, 'root', result[budgetType]])
        ],
        title,
    }
};
