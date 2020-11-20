const React = require('react');
const DataClient = require('../../../../../../helpers/data-client');
const generateDataForSheet = require('./generate-data-for-sheet');
const BaseCompareChart = require('../base-chart');

const dataClient = new DataClient({
  url: '/api/data/timeseries-compare',
  highchartsSelector: 'timeseries-compare-chart'
});

const EntitiesTimeseriesArea = (props) => (
  <BaseCompareChart
    {...props}
    dataClient={dataClient}
    generateDataForSheet={generateDataForSheet}
    chartId="timeseries-compare-chart"
  />
)

module.exports = EntitiesTimeseriesArea;
