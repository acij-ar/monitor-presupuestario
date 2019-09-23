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
  let maxBudget = 1;
  entities.map(({label, id, groupId, unified}, index) => {
    const results = db.prepare(`SELECT year, ${budgetsValues}, credito_original_posiblemente_modificado FROM entidades JOIN presupuestos ON entidades.id = entity_id WHERE entidades.id = ? ORDER BY year ASC`).all(id);
    const pathNumber = unified ? groupId - 1 : index;
    selectedBudgets.map(budget => {
      const color = entities.length > 1 ? patternFill({pathNumber, strokeColor: budget.color}) : budget.color;
      const serie = {
        name: `${label} - ${budget.label}`,
        data: [],
        color,
        stack: groupId ? `grouped-${budget.value}-${groupId}` : `ungrouped-${budget.value}-${id}`,
      };
      seriesAreGrouped = seriesAreGrouped || !!groupId;
      const budgetByYear = {};
      results.map(result => {
        const modified = budget.value === 'credito_original' && result.credito_original_posiblemente_modificado;
        const budgetAmount = result[budget.value];
        maxBudget = Math.max(maxBudget, budgetAmount);
        budgetByYear[result.year] = { color, y: budgetAmount, modified, tooltipY: budgetAmount }
      });
      years.map(year => serie.data.push(budgetByYear[year] || null));
      series.push(serie);
    });
  });

  series.map(serie => {
    serie.data.map(point => {
      if (point && point.modified) {
        point.y = maxBudget;
        point.tooltipY = null;
        point.color = 'rgba(0, 0, 0, 0.1)';
      }
    })
  });

  const titleText = seriesAreGrouped ? 'Seleccion de programas agrupados segun referencias' : entities.map(({name}) => name).join(', ');

  return {
    years,
    series,
    titleText,
  }
};
