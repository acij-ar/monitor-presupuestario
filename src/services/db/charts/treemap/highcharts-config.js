const highchartsBaseConfig = require('../helpers/highcharts-base-config');
const _ = require('lodash');

module.exports = ({data, name, color}) => _.merge({
  series: [{
    type: 'treemap',
    layoutAlgorithm: 'squarified',
    color,
    name,
    data,
    allowDrillToNode: true,
    dataLabels: {
      enabled: false,
      style: {
        textOverflow: "ellipsis",
        textOutline: 'none',
      }
    },
    levelIsConstant: false,
    levels: [{
      level: 1,
      dataLabels: {
        enabled: true
      },
      borderWidth: 1
    }],
  }],
  tooltip: {
    headerFormat: '<span style="font-size:12px">{series.name}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{point.name}: </td>' +
      '<td style="padding:0 0 0 10px; text-align: right"><b>$ {point.value:,.0f}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  title: {text: name},
}, highchartsBaseConfig);
