const React = require('react');
const PropTypes = require('prop-types');
const DataClient = require('../../../../../../helpers/data-client');
const generateDataForSheet = require('./generate-data-for-sheet');
const BaseCompareChart = require('../base-chart');

const dataClient = new DataClient({
  url: '/api/data/timeseries-compare',
  highchartsSelector: 'timeseries-compare-chart'
});

const EntitiesTimeseriesArea = ({ params }) => (
  <BaseCompareChart
    params={params}
    dataClient={dataClient}
    generateDataForSheet={generateDataForSheet}
    chartId="timeseries-compare-chart"
  />
)

EntitiesTimeseriesArea.propTypes = {
  params: PropTypes.shape({
    years: PropTypes.array,
    budget: PropTypes.string,
    inflation: PropTypes.string,
    groups: PropTypes.array,
  }),
};

module.exports = EntitiesTimeseriesArea;
