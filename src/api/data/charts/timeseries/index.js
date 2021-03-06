const highchartsOptions = require('./highcharts-options');
const budgetQuery = require('../../db/budget-query');
const sortBy = require('lodash/sortBy');

module.exports = async (req, res, next) => {
  const rows = await budgetQuery({ ... req.query, budget: 'all', year: null });
  const years = {};
  rows.forEach((row) => {
    const { ejercicio_presupuestario, original, vigente, devengado } = row;
    years[ejercicio_presupuestario] = { original, vigente, devengado }
  });
  const categories = [];
  const data = { original: [], vigente: [], devengado: [] };
  sortBy(Object.entries(years), ([year]) => year).forEach(([year, { original, vigente, devengado}]) => {
    categories.push(year);
    data.original.push(original);
    data.vigente.push(vigente);
    data.devengado.push(devengado);
  })
  const title = req.query.activity || req.query.program || req.query.entity || req.query.jurisdiction || `Presupuesto anual ${req.query.year}`
  res.locals.response = highchartsOptions(title, categories, data);
  next();
};

