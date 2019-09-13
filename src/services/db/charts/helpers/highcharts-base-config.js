module.exports = {
  exporting: {
    buttons: {
      contextButton: {
        menuItems: [
          'printChart',
          'separator',
          'downloadPNG',
          'downloadJPEG',
          'downloadPDF',
          'downloadSVG',
          'separator',
          'downloadCSV',
          'downloadXLS',
        ],
      },
    },
    sourceWidth: 1200,
    sourceHeight: 600,
    chartOptions: {
      chart: {
        spacingTop: 20,
        spacingBottom: 60,
      },
      subtitle: {
        verticalAlign: 'bottom',
      },
    },
  },
  plotOptions: {
    series: {
      animation: false,
      turboThreshold: 0,
    },
    treemap: {
      borderWidth: 0
    },
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
      stacking: 'normal',
    },
  },
  credits: {
    enabled: false
  },
  tooltip: {
    shared: true,
    useHTML: true,
    footerFormat: `
      </table>
      <br>
      <p style="white-space: normal; font-size: 11px;">
        La información se encuentra ajustada por inflación y ha sido sistematizada por ACIJ a partir de los 
        datos y documentos oficiales que publica el Estado Nacional. La metodologia utilizada para el ajuste 
        por inflación se encuentran disponibles en la sección Acerca de
      </p>
    `,
  },
};
