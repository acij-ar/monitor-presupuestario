const highchartsBaseConfig = require('../helpers/highcharts-base-config');
const _ = require('lodash');

module.exports = ({years, series, titleText}) => _.merge({
  chart: {type: 'column', height: '400px'},
  title: {text: titleText},
  xAxis: {
    categories: years,
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
  tooltip: {
    headerFormat: `
      <span style="font-size:12px">
        {point.key}
      </span>
      <table>
    `,
    pointFormat: `
      <tr>
        <td style="color:{series.color};padding:0">
          {series.name}: 
        </td>
        <td style="padding:0 0 0 10px; text-align: right">
          <b>$ {point.y:,.0f}</b>
        </td>
      </tr>
    `,
  },
  series,
}, highchartsBaseConfig);