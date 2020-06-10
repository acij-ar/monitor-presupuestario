require('@babel/polyfill');
const ReactHighcharts = require('react-highcharts');
require('highcharts/modules/sunburst')(ReactHighcharts.Highcharts);
require('highcharts/modules/exporting')(ReactHighcharts.Highcharts);
require('highcharts/modules/export-data')(ReactHighcharts.Highcharts);
require('highcharts/modules/accessibility')(ReactHighcharts.Highcharts);

const React = require('react');
const ReactDOM = require('react-dom');
const View = require('./view');

ReactDOM.hydrate(
  <View {...window.__INITIAL__DATA__}/>,
  document.getElementById('root')
);
