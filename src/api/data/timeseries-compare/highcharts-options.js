const baseHighchartsOptions = require('../helpers/base-highchart-options');
const merge = require('lodash/merge');

module.exports = (categories, data) => merge({}, baseHighchartsOptions, {
  chart: {
    type: 'areaspline'
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Presupuesto (en millones de pesos)',
    }
  },
  tooltip: {
    shared: true,
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.5
    }
  },
  xAxis: { categories },
  series: [{
    name: 'Grupo 1',
    data: data[0],
  }, {
    name: 'Grupo 2',
    data: data[1],
  }]
});
