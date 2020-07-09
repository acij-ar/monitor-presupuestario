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
  xAxis: {
    categories: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
  },
  series: [{
    name: 'John',
    data: [3, 4, 3, 5, 4, 10, 12]
  }, {
    name: 'Jane',
    data: [1, 3, 4, 3, 3, 5, 4]
  }]
});
