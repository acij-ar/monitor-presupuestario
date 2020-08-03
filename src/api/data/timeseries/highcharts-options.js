const baseHighchartsOptions = require('../helpers/base-highchart-options');
const merge = require('lodash/merge');

module.exports = (categories, data) => merge({}, baseHighchartsOptions, {
  chart: {
    type: 'column'
  },
  xAxis: {
    categories,
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Presupuesto (en pesos)',
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>$ {point.y}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Credito original',
    color: '#FFD400',
    data: data.original
  }, {
    name: 'Credito vigente',
    color: '#00EDAB',
    data: data.vigente
  }, {
    name: 'Credito devengado',
    color: '#007FFF',
    data: data.devengado
  }]
});
