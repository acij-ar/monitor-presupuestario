const db = require('../..');
const _ = require('lodash');
const availableYears = require('../../../../app/pages/monitor/helpers/available-years');
const availableBudgets = require('../../../../app/pages/monitor/helpers/available-budgets');
const patternFill = require('../helpers/pattern-fill');

module.exports = ({selectedYears, selectedBudgets, selectedEntities}) => {
    const years = _.sortBy((selectedYears || availableYears).map(year => year.label));
    selectedBudgets = selectedBudgets || availableBudgets;
    const budgetsValues = selectedBudgets.map(budget => budget.value).join(', ');
    const entities = selectedEntities || [{table: 'años', name: 'Presupuesto total'}];

    const series = [];
    entities.map(({table, name}, index) => {
        // TODO: filter by ids instead of names
        const results = db.prepare(`SELECT year, ${budgetsValues} FROM ${table} WHERE name = ? ORDER BY year ASC`).all(name);
        selectedBudgets.map(budget => {
            const serie = {
                name: `${name} - ${budget.label}`,
                data: [],
                color: entities.length > 1 ? patternFill({pathNumber: index, strokeColor: budget.color}) : budget.color,
            };
            const budgetByYear = {};
            results.map(result => budgetByYear[result.year] = result[budget.value]);
            years.map(year => serie.data.push(budgetByYear[year] || 0));
            series.push(serie);
        });
    });
    return {
        years,
        series,
    }
};
