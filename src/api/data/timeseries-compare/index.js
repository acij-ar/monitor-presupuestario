const highchartsOptions = require('./highcharts-options');

module.exports = async (req, res) => {
  const response = highchartsOptions();
  res.json(response);
};

