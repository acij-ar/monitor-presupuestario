const React = require('react');
const PropTypes = require('prop-types');
const ChartActions = require('../../../../../../components/monitor/chart-actions');
const chart = require('../../../../../../components/chart');

const { useEffect, useState } = React;

const generateDataForSheet = (chartData) => {
  if (chartData) {
    // TODO: generate data for hierarchy (better after getting the chart working)
  }
  const header = [];
  const rows = [];
  return [rows, {header}]
}

const EntityHierarchy = ({ params }) => {
  let hierarchyChart;
  const [actionVisible, setVisible] = useState(false);
  const [chartData, setData] = useState(null);

  useEffect(() => {
    if (params && params.year) {
      chart(hierarchyChart, params, '/api/data/hierarchy', 'hierarchy-chart')
        .then(({ chart, data }) => {
          hierarchyChart = chart;
          setVisible(true);
          setData(data);
        });
    }
  }, [params]);

  return (
    <ChartActions visible={actionVisible} generateDataForSheet={() => generateDataForSheet(chartData)}>
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
    budget: PropTypes.string,
    inflation: PropTypes.string,
  }),
};

module.exports = EntityHierarchy;
