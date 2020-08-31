const baseHighchartsOptions = require('../base-highchart-options');
const merge = require('lodash/merge');

module.exports = (categories, series) => merge({}, baseHighchartsOptions, {
  chart: {type: 'column'},
  xAxis: {
    categories,
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Presupuesto en pesos'
    },
    labels: {
      format: '${value:,.0f}'
    }
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
      stacking: 'normal',
    },
  },
  tooltip: {
    shared: true,
  },
  series,
});

