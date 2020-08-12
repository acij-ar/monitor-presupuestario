const query = require('./query');
const transformRows = require('./transform-rows');
const highchartsOptions = require('./highcharts-options');

module.exports = async (req, res, next) => {
  const rows = await query(req.query);
  const { categories, series } = await transformRows(rows, req.query);
  res.locals.response = highchartsOptions(categories, series);
  next();
};

