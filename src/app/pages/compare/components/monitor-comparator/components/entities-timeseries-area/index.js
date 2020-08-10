const React = require('react');
const PropTypes = require('prop-types');
const DataClient = require('../../../../../../components/data-client');
const ChartActions = require('../../../../../../components/monitor/chart-actions');
const generateDataForSheet = require('./generate-data-for-sheet');

const { useEffect, useState } = React;
const dataClient = new DataClient({ url: '/api/data/timeseries-compare', highchartsSelector: 'timeseries-compare-chart' });

const EntitiesTimeseriesArea = ({ params }) => {
  const [actionVisible, setVisible] = useState(false);
  const [chartData, setData] = useState(null);

  const dataCallback = (data) => {
    setVisible(true)
    setData(data);
  }

  useEffect(() => {
    // TODO: validate at least one group present
    dataClient.get(params, dataCallback)
  }, [params]);

  return (
    <ChartActions visible={actionVisible} generateDataForSheet={() => generateDataForSheet(chartData)}>
      <div id="timeseries-compare-chart" />
    </ChartActions>
  )
}

EntitiesTimeseriesArea.propTypes = {
  params: PropTypes.shape({
    jurisdiction: PropTypes.string,
    entity: PropTypes.string,
    program: PropTypes.string,
    activity: PropTypes.string,
    year: PropTypes.number,
    budget: PropTypes.string,
    inflation: PropTypes.string,
  }),
};

module.exports = EntitiesTimeseriesArea;
