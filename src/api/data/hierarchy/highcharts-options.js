const baseHighchartsOptions = require('../helpers/base-highchart-options');
const merge = require('lodash/merge');

module.exports = ({ data, nodes}) => merge({}, baseHighchartsOptions, {
  chart: {
    inverted: true,
    height: '1000px',
    reflow: false,
  },
  series: [
    {
      type: 'organization',
      name: '',
      data,
      nodes,
      levels: [
        {
          level: 0,
          height: '200px',
          color: 'silver',
          dataLabels: {
            color: 'black'
          },
        },
        {
          level: 1,
          height: '200px',
          color: '#A94EF6',
          dataLabels: {
            color: 'black'
          },
        },
        {
          level: 2,
          height: '200px',
          color: '#00B0AE',
        },
        {
          level: 3,
          height: '200px',
          color: '#FF00E1',
        },
        {
          level: 4,
          height: '200px',
          color: '#8200FF',
        },
        {
          level: 5,
          height: '200px',
          color: '#BB73FF',
        },
        {
          level: 6,
          height: '200px',
          color: '#A94EF6',
        }
      ],
      colorByPoint: false,
      dataLabels: {
        color: 'white'
      },
      borderColor: 'white',
    }
  ],
  tooltip: {
    outside: true
  },
});
