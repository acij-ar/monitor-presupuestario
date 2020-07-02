const React = require('react');
const PropTypes = require('prop-types');
const chart = require('../../../../../../components/chart');
const ChartActions = require('../../../../../../components/monitor/chart-actions');

const { useEffect } = React;

const EntityTimeseries = ({ params }) => {
  let timeseriesChart;

  useEffect(() => {
    chart(timeseriesChart, params, '/api/data/timeseries', 'timeseries-chart')
      .then(outputChart => {
        timeseriesChart = outputChart;
      });
  }, [params]);

  return (
    <ChartActions>
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
    function: PropTypes.string,
    budget: PropTypes.string,
    inflation: PropTypes.string,
  }),
};

module.exports = EntityTimeseries;
