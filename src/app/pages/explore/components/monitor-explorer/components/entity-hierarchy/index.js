const React = require('react');
const PropTypes = require('prop-types');
const ChartActions = require('../../../../../../components/monitor/chart-actions');
const chart = require('../../../../../../components/chart');

const { useEffect, useState } = React;

const EntityHierarchy = ({ params }) => {
  let hierarchyChart;
  const [actionVisible, setVisible] = useState(false);

  useEffect(() => {
    if (params && params.year) {
      chart(hierarchyChart, params, '/api/data/hierarchy', 'hierarchy-chart')
        .then(outputChart => {
          hierarchyChart = outputChart;
          setVisible(true)
        });
    }
  }, [params]);

  return (
    <ChartActions visible={actionVisible}>
      <div id="hierarchy-chart-container">
        <div>
          <div id="hierarchy-chart" />
        </div>
      </div>
    </ChartActions>
  )
}

EntityHierarchy.propTypes = {
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

module.exports = EntityHierarchy;
