const React = require('react');
const PropTypes = require('prop-types');
const chart = require('../../../../../../components/chart');
const ChartActions = require('../../../../../../components/monitor/chart-actions');

const { useEffect, useState } = React;

const EntitySunburst = ({ params }) => {
  let sunburstChart;
  const [actionVisible, setVisible] = useState(false);

  useEffect(() => {
    if (params && params.year) {
      chart(sunburstChart, params, '/api/data/sunburst', 'sunburst-chart')
        .then(outputChart => {
          sunburstChart = outputChart;
          setVisible(true)
        });
    }
  }, [params]);

  return (
    <ChartActions visible={actionVisible}>
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
    budget: PropTypes.string,
    inflation: PropTypes.string,
  }),
};

module.exports = EntitySunburst;
