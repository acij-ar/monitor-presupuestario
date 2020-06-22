const genericQuery = require('../helpers/query');
const highchartsOptions = require('./highcharts-options');
const transformRows = require('./transform-rows');

module.exports = async (req, res, next) => {
  try {
    const rows = await genericQuery(req.query);
    const sunburstData = transformRows(req.query, rows);
    const response = highchartsOptions(sunburstData);
    res.json(response);
  } catch (e) {
    next(e);
  }
};

