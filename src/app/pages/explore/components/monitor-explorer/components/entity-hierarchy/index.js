const React = require('react');
const PropTypes = require('prop-types');
const chart = require('../../../../../../components/chart');

const { useEffect } = React;

const EntityHierarchy = ({ params }) => {
  let hierarchyChart;

  useEffect(() => {
    if (params && params.year) {
      chart(hierarchyChart, params, '/api/data/hierarchy', 'hierarchy-chart')
        .then(outputChart => {
          hierarchyChart = outputChart;
        });
    }
  }, [params]);

  return (
    <div id="hierarchy-chart" />
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
