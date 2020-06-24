const Highcharts = require('highcharts');

if (global.window) {
  require('highcharts/modules/sunburst')(Highcharts);
  require('highcharts/modules/sankey')(Highcharts);
  require('highcharts/modules/organization')(Highcharts);
  require('highcharts/modules/exporting')(Highcharts);
  require('highcharts/modules/export-data')(Highcharts);
  require('highcharts/modules/accessibility')(Highcharts);
}

module.exports = Highcharts
