const highchartsOptions = require('./highcharts-options');

module.exports = async (req, res, next) => {
  res.locals.response = highchartsOptions();
  next();
};

