const db = require('../..');
const _ = require('lodash');
const availableYears = require('../../../../app/pages/monitor/helpers/available-years');
const availableBudgets = require('../../../../app/pages/monitor/helpers/available-budgets');

module.exports = ({selectedYears, selectedBudgets, selectedEntities}) => {
    const years = _.sortBy((selectedYears || availableYears).map(year => year.label));
    selectedBudgets = selectedBudgets || availableBudgets;
    const budgetsValues = selectedBudgets.map(budget => budget.value);
    const entities = selectedEntities || [{table: 'años', name: 'Presupuesto total'}];

    const series = [];
    entities.map(({table, name}) => {
        const results = db.sqlite.prepare(`SELECT year, ${budgetsValues.join(', ')} FROM ${table} WHERE name = ? ORDER BY year ASC`).all(name)
        budgetsValues.map(budget => {
            const budgetName = selectedBudgets.find(({value}) => value === budget).label;
            const serie = {
                name: `${name} - ${budgetName}`,
                data: [],
            };
            const budgetByYear = {};
            results.map(result => budgetByYear[result.year] = result[budget]);
            years.map(year => serie.data.push(budgetByYear[year] || 0));
            series.push(serie);
        });
    });
    return {
        years,
        series,
    }
};
