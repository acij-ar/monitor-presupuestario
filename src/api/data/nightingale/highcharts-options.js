const baseHighchartsOptions = require('../helpers/base-highchart-options');
const merge = require('lodash/merge');

module.exports = (categories, data) => merge({}, baseHighchartsOptions, {
  chart: {
    polar: true,
    type: 'column',
    margin: [0, 0, -200, 0],//top, right, bottom, left
  },
  xAxis: {
    categories: ['Apr-1855', 'May-1855', 'Jun-1855', 'Jul-1855', 'Aug-1855', 'Sep-1855', 'Oct-1855', 'Nov-1855', 'Dec-1855', 'Jan-1856', 'Feb-1856', 'Mar-1856'],
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
    size: 700,
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
  series: [
    {name: 'Disease', data: [477, 508, 802, 382, 483, 189, 128, 178, 91, 42, 24, 15], color: '#AAB9C1'},
    {name: 'Other', data: [57, 37, 31, 33, 25, 20, 18, 32, 28, 48, 19, 35], color: '#AFA292'},
    {name: 'Wound', data: [48, 49, 209, 134, 164, 276, 53, 33, 18, 2, 0, 0], color: '#D7B6A7'},
  ],
});
