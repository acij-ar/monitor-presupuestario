const sumBudgets = require('./sum-budgets');
const getBaseObj = require('./base-obj');

const hierarchy = [
  'ejercicio_presupuestario',
  'jurisdiccion_desc',
  'entidad_desc',
  'programa_desc',
  'actividad_desc',
];

module.exports = (rows, options) => {
  const { withBudgets, maxDepth } = options;
  const baseObj = getBaseObj({name: 'Presupuesto'}, withBudgets);

  const row2obj = (row, baseObj, key, index) => {
    if (maxDepth && index > maxDepth) return;
    const name = row[key];
    let child = baseObj.children.find(child => child.name === name)
    if (!child) {
      child = getBaseObj({name, key}, withBudgets)
      baseObj.children.push(child);
    }
    if (withBudgets) sumBudgets(row, child);
    return child;
  };
  rows.forEach((row) => {
    if (withBudgets) sumBudgets(row, baseObj);
    hierarchy.reduce((acumm, level, index) => row2obj(row, acumm, level, index), baseObj);
  });
  return baseObj;
}
