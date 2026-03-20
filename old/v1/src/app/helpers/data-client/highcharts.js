const Highcharts = require('highcharts');

if (global.window) {
  Highcharts.setOptions({
    lang: {
      numericSymbols: null,
    },
  });
  require('highcharts/highcharts-more')(Highcharts);
  require('highcharts/modules/sunburst')(Highcharts);
  require('highcharts/modules/sankey')(Highcharts);
  require('highcharts/modules/organization')(Highcharts);
  require('highcharts/modules/exporting')(Highcharts);
  require('highcharts/modules/export-data')(Highcharts);
  require('highcharts/modules/accessibility')(Highcharts);
  require('highcharts/modules/pattern-fill')(Highcharts);
}

module.exports = Highcharts
