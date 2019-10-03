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
    `,
  },
  legend: {
    itemWidth: 500,
    maxHeight: 75,
  }
};
