const highchartsOptions = require('./highcharts-options');
const genericQuery = require('../helpers/query');
const rowParseInt = require('../helpers/row-parse-int');
const sortBy = require('lodash/sortBy');

module.exports = async (req, res) => {
  const rows = await genericQuery({ ... req.query, budget: 'all', year: null });
  const years = {};
  rows.forEach((row) => {
    const { ejercicio_presupuestario, original, vigente, devengado } = rowParseInt(row);
    if (years[ejercicio_presupuestario]) {
      years[ejercicio_presupuestario].original += original;
      years[ejercicio_presupuestario].vigente += vigente;
      years[ejercicio_presupuestario].devengado += devengado;
    } else {
      years[ejercicio_presupuestario] = { original, vigente, devengado }
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

