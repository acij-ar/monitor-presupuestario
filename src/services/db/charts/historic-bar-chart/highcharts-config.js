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
  exporting: {
    chartOptions: {
      subtitle: {
        text: `Este gráfico contiene información presupuestaria sobre ${titleText} para ${years.join(', ')}. La información se encuentra ajustada por inflación y ha sido sistematizada por ACIJ a partir de los datos y documentos oficiales que publica el Estado Nacional. Los índices utilizados para el ajuste por inflación se encuentran disponibles en monitorpresupuestario.acij.org.ar/acerca-de. Para más información consulte monitorpresupuestario.acij.org.ar`
      }
    }
  }
}, highchartsBaseConfig);
