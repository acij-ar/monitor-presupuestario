const React = require('react');
const DataClient = require('../../../../../../helpers/data-client');
const generateDataForSheet = require('./generate-data-for-sheet');
const BaseCompareChart = require('../base-chart');

const dataClient = new DataClient({
  url: '/api/data/columns-compare',
  highchartsSelector: 'columns-compare-chart',
  destroyChartBeforeUpdate: true,
});

const EntitiesColumns = (props) => (
  <BaseCompareChart
    {...props}
    dataClient={dataClient}
    generateDataForSheet={generateDataForSheet}
    chartId="columns-compare-chart"
  />
)

module.exports = EntitiesColumns;
