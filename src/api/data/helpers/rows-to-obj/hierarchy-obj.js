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
    const { years, [key]: name } = row;
    let child = baseObj.children.find(child => child.name === name)
    if (!child) {
      child = getBaseObj({name, key, years}, withBudgets)
      baseObj.children.push(child);
    } else if (years) {
      years.map(year => {
        if (!child.years.includes(year)) {
          child.years.push(year)
        }
      })
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
