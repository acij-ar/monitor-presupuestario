const React = require('react');
const PropTypes = require('prop-types');
const DataClient = require('../../../../../../components/data-client');
const ChartActions = require('../../../../../../components/monitor/chart-actions');
const generateDataForSheet = require('./generate-data-for-sheet');
const LoadingOverlay = require('../../../../../../components/loading-overlay');

const { useEffect, useState } = React;
const dataClient = new DataClient({ url: '/api/data/nightingale', highchartsSelector: 'nightingale-compare-chart' });

const EntitiesNightingaleRose = ({ params }) => {
  const [actionVisible, setVisible] = useState(false);
  const [chartData, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const dataCallback = (data) => {
    setLoading(false);
    setVisible(true)
    setData(data);
  }

  useEffect(() => {
    // TODO: validate at least one group present
    setLoading(true);
    dataClient.get(params, dataCallback)
  }, [params]);

  return (
    <LoadingOverlay loading={loading}>
      <ChartActions visible={actionVisible} generateDataForSheet={() => generateDataForSheet(chartData)}>
        <div id="nightingale-compare-chart" />
      </ChartActions>
    </LoadingOverlay>
  )
}

EntitiesNightingaleRose.propTypes = {
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

module.exports = EntitiesNightingaleRose;
