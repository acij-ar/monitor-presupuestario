const React = require('react');
const PropTypes = require('prop-types');
const chart = require('../../../../../../components/chart');
const ChartActions = require('../../../../../../components/monitor/chart-actions');

const { useEffect, useState } = React;

const EntityTimeseries = ({ params }) => {
  let timeseriesChart;
  const [actionVisible, setVisible] = useState(false);

  useEffect(() => {
    chart(timeseriesChart, params, '/api/data/timeseries', 'timeseries-chart')
      .then(outputChart => {
        timeseriesChart = outputChart;
        setVisible(true)
      });
  }, [params]);

  return (
    <ChartActions visible={actionVisible}>
      <div id="timeseries-chart" />
    </ChartActions>
  )
}

EntityTimeseries.propTypes = {
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

module.exports = EntityTimeseries;
