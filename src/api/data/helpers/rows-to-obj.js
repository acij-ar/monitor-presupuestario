const merge = require('lodash/merge');

const getBaseObj = (initialValues) => merge({}, initialValues, {
  budget: 0,
  original: 0,
  vigente: 0,
  devengado: 0,
  children: {},
});

const sumBudgets = (row, obj) => {
  const { budget, original, vigente, devengado } = row;
  if (budget) { obj.budget += budget }
  if (original) { obj.original += original }
  if (vigente) { obj.vigente += vigente }
  if (devengado) { obj.devengado += devengado }
}

const row2obj = (row, baseObj, key) => {
  const name = row[key];
  if (!baseObj.children[name]) {
    baseObj.children[name] = getBaseObj({ name });
  }
  sumBudgets(row, baseObj.children[name]);
  return baseObj.children[name];
};

module.exports = (params, rows) => {
  const baseObj = getBaseObj({name: params.year});
  const hierarchy = [
    'funcion_desc', 'jurisdiccion_desc', 'entidad_desc',
    // 'programa_desc', 'actividad_desc',
  ];
  rows.forEach(row => {
    sumBudgets(row, baseObj);
    hierarchy.reduce((acumm, level) => row2obj(row, acumm, level), baseObj);
  });
  return baseObj
}
