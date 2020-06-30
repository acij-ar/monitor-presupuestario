const baseHighchartsOptions = require('../helpers/base-highchart-options');
const merge = require('lodash/merge');

module.exports = (data) => merge({}, baseHighchartsOptions, {
  series: [
    {
      type: 'sunburst',
      data,
      allowDrillToNode: false,
      cursor: 'pointer',
      dataLabels: {
        format: '{point.label}',
        rotationMode: 'circular',
      },
      levels: [
        {
          level: 1,
          color: 'transparent',
        },
        {
          level: 2,
          color: '#00B0AE',
        },
        {
          level: 3,
          color: '#FF00E1',
        },
        {
          level: 4,
          color: '#8200FF',
        },
        {
          level: 5,
          color: '#BB73FF',
        },
        {
          level: 6,
          color: '#A94EF6',
        }
      ],
    },
  ],
  tooltip: {
    headerFormat: '',
    pointFormat: '{point.name}: <b>{point.value}M</b>',
  },
});
