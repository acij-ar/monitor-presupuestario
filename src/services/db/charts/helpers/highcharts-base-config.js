`http://monitorpresupuestario.acij.org.ar/acerca-de`;

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
      borderWidth: 0
    },
  },
  credits: {
    enabled: false
  },
};
