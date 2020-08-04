const genericQuery = require('../helpers/query');
const highchartsOptions = require('./highcharts-options');
const transformRows = require('./transform-rows');

module.exports = async (req, res, next) => {
  try {
    const rows = await genericQuery(req.query);
    const sunburstData = transformRows(rows, req.query);
    res.locals.response = highchartsOptions(sunburstData);
    next();
  } catch (e) {
    next(e);
  }
};

