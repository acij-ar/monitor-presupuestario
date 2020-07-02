const React = require('react');
const PropTypes = require('prop-types');
const chart = require('../../../../../../components/chart');
const ChartActions = require('../../../../../../components/monitor/chart-actions');

const { useEffect } = React;

const EntitySunburst = ({ params }) => {
  let sunburstChart;

  useEffect(() => {
    if (params && params.year) {
      chart(sunburstChart, params, '/api/data/sunburst', 'sunburst-chart')
        .then(outputChart => {
          sunburstChart = outputChart;
        });
    }
  }, [params]);

  return (
    <ChartActions>
      <div id="sunburst-chart" />
    </ChartActions>
  )
}

EntitySunburst.propTypes = {
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

module.exports = EntitySunburst;
