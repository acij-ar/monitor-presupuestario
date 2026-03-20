const rows2obj = require('../../helpers/rows-to-obj');

const budgetComparison = (a, b) => b.budget - a.budget;

const types = [
  'Año',
  'Jurisdicción',
  'Entidad',
  'Programa',
  'Actividad',
]

const obj2sunburstData = (baseObj, sunburstData, budgetType, maxDepth, depth = 0) => {
  const children = Object.values(baseObj.children).sort(budgetComparison).filter(({budget}) => budget > 0);
  children.forEach(child => {
    sunburstData.push({
      id: child.id,
      parent: baseObj.id,
      name: child.name,
      value: child.budget,
      type: types[depth],
      budgetType,
    });
    if (child.children && depth < maxDepth) {
      obj2sunburstData(child, sunburstData, budgetType, maxDepth, depth + 1);
    }
  });
};

module.exports = (rows, params) => {
  const baseObj = rows2obj(rows, {withIds: true, withBudgets: true});
  const sunburstData = [];
  const maxDepth = params.entity ? 4 : 3;
  const budgetType = `Presupuesto ${params.budget.toLowerCase()}`
  obj2sunburstData(baseObj, sunburstData, budgetType, maxDepth);
  return sunburstData;
};
