const baseHighchartsOptions = require('../../helpers/base-highchart-options');
const merge = require('lodash/merge');

module.exports = (categories, series) => merge({}, baseHighchartsOptions, {
  chart: {
    polar: true,
    type: 'column',
  },
  xAxis: {
    categories: categories,
    gridLineWidth: 0,
    lineWidth: 0,
    labels: {
      enabled: false,
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: ''
    },
    gridLineWidth: 0,
    labels: {
      enabled: false,
    },
  },
  legend: {
    enabled: true,
    borderRadius: 0,
    borderWidth: 1,
  },
  pane: {
    size: 500,
    startAngle: -90,
  },
  tooltip: {
    shared: true,
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      borderWidth: 1,
      pointPlacement: 'between',
      pointStart: 0,
      pointPadding: 0,
      groupPadding: 0,
    },
  },
  series,
});
