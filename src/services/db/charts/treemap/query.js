const db = require('../..');
const availableYears = require('../../../../app/pages/monitor/helpers/available-years');
const availableBudgets = require('../../../../app/pages/monitor/helpers/available-budgets');

// TODO: combinations of year and entity may not exists. Handle these cases

module.exports = ({selectedYear, selectedBudget, selectedEntity}) => {
    const year = (selectedYear || availableYears[0]).label;
    const {value: budgetValue, label: budgetName, color} = (selectedBudget || availableBudgets[0]);
    const entity = (selectedEntity || {name: 'Presupuesto total', id: 1});

    const data = db.prepare(`SELECT name, ${budgetValue} AS value FROM entidades JOIN presupuestos ON entidades.id = entity_id WHERE entidades.parent_id = ? AND year = ?`).all(entity.id, year);
    const name = `${entity.name} - ${year} ${budgetName}`;

    return {name, data, color};
};
