const highchartsOptions = require('./highcharts-options');
const genericQuery = require('../helpers/query');
const sortBy = require('lodash/sortBy');

module.exports = async (req, res) => {
  const rows = await genericQuery({ ... req.query, budget: 'all', year: null });
  const years = {};
  rows.forEach(({ ejercicio, original, vigente, devengado }) => {
    if (years[ejercicio]) {
      years[ejercicio].original += original;
      years[ejercicio].vigente += vigente;
      years[ejercicio].devengado += devengado;
    } else {
      years[ejercicio] = {
        original,
        vigente,
        devengado
      }
    }
  });
  const categories = [];
  const data = { original: [], vigente: [], devengado: [] };
  sortBy(Object.entries(years), ([year]) => year).forEach(([year, { original, vigente, devengado}]) => {
    categories.push(year);
    data.original.push(original);
    data.vigente.push(vigente);
    data.devengado.push(devengado);
  })
  const response = highchartsOptions(categories, data);
  res.json(response);
};

