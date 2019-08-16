const ReactHighcharts = require('react-highcharts');
const Treemap = require('highcharts/modules/treemap');
const Exporting = require('highcharts/modules/exporting');
const ExportData = require('highcharts/modules/export-data');
Treemap(ReactHighcharts.Highcharts);
Exporting(ReactHighcharts.Highcharts);
ExportData(ReactHighcharts.Highcharts);

const React = require('react');
const ReactDOM = require('react-dom');
const Monitor = require('../pages/monitor/view');

ReactDOM.hydrate(
    <Monitor {...window.__INITIAL__DATA__}/>,
    document.getElementById('root')
);
