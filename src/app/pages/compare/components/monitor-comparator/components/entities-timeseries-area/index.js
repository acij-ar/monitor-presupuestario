const React = require('react');
const PropTypes = require('prop-types');
const DataClient = require('../../../../../../components/data-client');
const ChartActions = require('../../../../../../components/monitor/chart-actions');
const generateDataForSheet = require('./generate-data-for-sheet');
const LoadingOverlay = require('../../../../../../components/loading-overlay');

const { useEffect, useState } = React;
const dataClient = new DataClient({ url: '/api/data/timeseries-compare', highchartsSelector: 'timeseries-compare-chart' });

const EntitiesTimeseriesArea = ({ params }) => {
  const [actionVisible, setVisible] = useState(false);
  const [chartData, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const dataCallback = (data) => {
    setLoading(false);
    setVisible(true)
    setData(data);
  }

  useEffect(() => {
    const atLeastOneItemInGroups = params && params.groups && params.groups.length > 0 && (params.groups[0].length > 0 || params.groups[1].length > 0);
    if (atLeastOneItemInGroups) {
      setLoading(true);
      dataClient.get(params, dataCallback)
    } else {
      setVisible(false);
      dataClient.destroyChart();
    }
  }, [params]);

  return (
    <LoadingOverlay loading={loading}>
      <ChartActions visible={actionVisible} generateDataForSheet={() => generateDataForSheet(chartData)}>
        <div id="timeseries-compare-chart" />
      </ChartActions>
    </LoadingOverlay>
  )
}

EntitiesTimeseriesArea.propTypes = {
  params: PropTypes.shape({
    years: PropTypes.array,
    budget: PropTypes.string,
    inflation: PropTypes.string,
    groups: PropTypes.array,
  }),
};

module.exports = EntitiesTimeseriesArea;
