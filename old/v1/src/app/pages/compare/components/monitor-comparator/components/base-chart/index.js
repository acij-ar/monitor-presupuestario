const React = require('react');
const PropTypes = require('prop-types');
const ChartActions = require('../../../../../../components/chart-actions');
const LoadingOverlay = require('../../../../../../components/loading-overlay');

const { useEffect, useState } = React;

const BaseCompareChart = ({ params, dataClient, generateDataForSheet, chartId }) => {
  const [actionVisible, setVisible] = useState(false);
  const [chartData, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const dataCallback = (data) => {
    setLoading(false);
    setVisible(true)
    setData(data);
  }

  useEffect(() => {
    const atLeastOneItemInGroups = params && params.groups && params.groups.length > 0;
    if (atLeastOneItemInGroups) {
      setLoading(true);
      dataClient.get(params, dataCallback)
    } else {
      dataClient.cancelRequest();
      setVisible(false);
      dataClient.destroyChart();
    }
  }, [params]);

  return (
    <LoadingOverlay loading={loading}>
      <ChartActions visible={actionVisible} generateDataForSheet={() => generateDataForSheet(chartData, params)}>
        <div id={chartId} />
      </ChartActions>
    </LoadingOverlay>
  )
}

BaseCompareChart.propTypes = {
  params: PropTypes.shape({
    years: PropTypes.array,
    budget: PropTypes.string,
    inflation: PropTypes.string,
    groups: PropTypes.array,
  }),
  dataClient: PropTypes.shape({
    get: PropTypes.func,
    cancelRequest: PropTypes.func,
    destroyChart: PropTypes.func,
  }),
  generateDataForSheet: PropTypes.func.isRequired,
  chartId: PropTypes.string.isRequired,
};

module.exports = BaseCompareChart;
