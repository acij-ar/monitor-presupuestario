const db = require('../..');
const _ = require('lodash');
const availableYears = require('../../../../app/pages/monitor/helpers/available-years');
const availableBudgets = require('../../../../app/pages/monitor/helpers/available-budgets');
const patternFill = require('../helpers/pattern-fill');

module.exports = ({selectedYears, selectedBudgets, selectedEntities}) => {
  const years = _.sortBy((selectedYears || availableYears).map(year => year.label));
  selectedBudgets = selectedBudgets || availableBudgets;
  const budgetsValues = selectedBudgets.map(budget => budget.value).join(', ');
  const entities = selectedEntities || [{label: 'Presupuesto total', id: 1}];

  const series = [];
  let seriesAreGrouped = false;
  entities.map(({label, id, groupId}, index) => {
    const results = db.prepare(`SELECT year, ${budgetsValues} FROM entidades JOIN presupuestos ON entidades.id = entity_id WHERE entidades.id = ? ORDER BY year ASC`).all(id);
    selectedBudgets.map(budget => {
      const serie = {
        name: `${label} - ${budget.label}`,
        data: [],
        color: entities.length > 1 ? patternFill({pathNumber: index, strokeColor: budget.color}) : budget.color,
        stack: groupId ? `grouped-${budget.value}-${groupId}` : `ungrouped-${budget.value}-${id}`,
      };
      seriesAreGrouped = seriesAreGrouped || !!groupId;
      const budgetByYear = {};
      results.map(result => budgetByYear[result.year] = result[budget.value]);
      years.map(year => serie.data.push(budgetByYear[year] || null));
      series.push(serie);
    });
  });

  const titleText = seriesAreGrouped ? 'Seleccion de programas agrupados segun referencias' : entities.map(({name}) => name).join(', ');

  return {
    years,
    series,
    titleText,
  }
};
