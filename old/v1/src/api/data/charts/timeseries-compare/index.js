const highchartsOptions = require('./highcharts-options');
const query = require('./query');
const transformRows = require('./transform-rows');

module.exports = async (req, res, next) => {
  const rows = await query(req.query);
  const { categories, data } = await transformRows(rows);
  res.locals.response = highchartsOptions(categories, data);
  next();
};

