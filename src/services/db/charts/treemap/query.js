const db = require('../..');
const availableYears = require('../../../../app/pages/monitor/helpers/available-years');
const availableBudgets = require('../../../../app/pages/monitor/helpers/available-budgets');
const {db: {tables}} = require('../../../../config');

// TODO: combinations of year and entity may not exists. Handle these cases

module.exports = ({selectedYear, selectedBudget, selectedEntity}) => {
    const year = (selectedYear || availableYears[0]).label;
    const {value: budgetValue, label: budgetName, color} = (selectedBudget || availableBudgets[0]);
    const entity = (selectedEntity || {table: 'años', name: 'Presupuesto total'});
    const tableConfig = tables.find(table => table.name === entity.table);

    let data, name;
    if (entity.table === 'años') {
        data = db.sqlite.prepare(
            `SELECT name, ${budgetValue} AS value FROM jurisdicciones 
                    WHERE year = ${year} ORDER BY ${budgetValue} DESC`).all();
        name = `${entity.name} - ${year} ${budgetName}`;
    } else if (tableConfig.childTable) {
        // TODO: use ids instead of names for the following query
        const {parentId} = db.sqlite.prepare(
            `SELECT id AS parentId from ${entity.table} WHERE year = ${year} AND name = ?`).get(entity.name);
        data = db.sqlite.prepare(
            `SELECT name, ${budgetValue} AS value FROM ${tableConfig.childTable} 
                    WHERE ${tableConfig.primaryKeyForChild} = ${parentId} AND year = ${year} 
                    ORDER BY ${budgetValue} DESC`).all();
        name = `${entity.name} - ${year} ${budgetName}`;
    } else {
        // TODO: use ids instead of names for the following query
        const {parentId} = db.sqlite.prepare(
            `SELECT ${tableConfig.primaryKeyForParent} AS parentId FROM ${entity.table} WHERE year = ${year} AND name = ?`).get(entity.name);
        const {parentName} = db.sqlite.prepare(`SELECT name AS parentName FROM ${tableConfig.parentTable} WHERE id = ?`).get(parentId);
        data = db.sqlite.prepare(
            `SELECT name, ${budgetValue} AS value FROM ${entity.table} 
                    WHERE ${tableConfig.primaryKeyForParent} = ${parentId} AND year = ${year}
                    ORDER BY ${budgetValue} DESC`).all();
        name = `${parentName} - ${year} ${budgetName}`;
    }

    return {name, data, color};

};
