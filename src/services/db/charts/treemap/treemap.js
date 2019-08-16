const db = require('..');
const _ = require('lodash');

module.exports = async ({parentTable, parentName, year, budgetType}) => {
    const parentResult = await db.sqlite.get(
        `SELECT id FROM ${parentTable} WHERE year = ? AND name = ?`,
        [year, parentName],
    );
    const title = `${parentName} (${budgetType} ${year})`;
    if (!parentResult) {
        return {title};
    }
    const {id: parentId} = parentResult;
    const childTable = parentTable === 'jurisdicciones' ? 'programas' : 'actividades';
    const pkColumn = parentTable === 'jurisdicciones' ? 'jurisdiccion_id' : 'programa_id';
    const joinTable = parentTable === 'jurisdicciones' ? 'entidades' : parentTable;
    const results = await db.sqlite.all(
        `SELECT 
            ${childTable}.name, 
            ${childTable}.id, 
            ${childTable}.${budgetType},
            ${joinTable}.name AS parentName
        FROM ${childTable} 
        INNER JOIN ${joinTable} ON ${joinTable}.id = ${childTable}.${pkColumn}
        WHERE ${childTable}.year = ? AND ${childTable}.${pkColumn} = ? 
        ORDER BY ${childTable}.${budgetType} DESC`,
        [year, parentId]
    );

    return {
        data: [
            ['name', 'parent', 'value'],
            ['root', null, _.sumBy(results, budgetType)],
            ...results.map(result => [`${result.name} (${result.parentName})`, 'root', result[budgetType]])
        ],
        title,
    }
};
