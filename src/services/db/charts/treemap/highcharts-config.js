const highchartsBaseConfig = require('../helpers/highcharts-base-config');
const _ = require('lodash');

module.exports = ({data, name, color, titleSuffix}) => _.merge({
  series: [{
    type: 'treemap',
    layoutAlgorithm: 'squarified',
    color,
    name: titleSuffix,
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
    headerFormat: `
      <span style="font-size:12px">
        {series.name}
      </span><table>
    `,
    pointFormat: `
      <tr>
        <td style="color:{series.color};padding:0">
          {point.name}: 
        </td>
        <td style="padding:0 0 0 10px; text-align: right">
          <b>$ {point.value:,.0f}</b>
        </td>
      </tr>
    `,
  },
  title: {text: null},
  exporting: {
    chartOptions: {
      subtitle: {
        text: `Este gráfico contiene información presupuestaria sobre ${name}. La información se encuentra ajustada por inflación y ha sido sistematizada por ACIJ a partir de los datos y documentos oficiales que publica el Estado Nacional. Los índices utilizados para el ajuste por inflación se encuentran disponibles en monitorpresupuestario.acij.org.ar/acerca-de. Para más información consulte monitorpresupuestario.acij.org.ar`
      }
    }
  }
}, highchartsBaseConfig);
