const React = require('react');
const PropTypes = require('prop-types');
const ChartActions = require('../../../../../../components/monitor/chart-actions');
const axios = require('axios');
let OrganizationChart;
if (global.window) {
  OrganizationChart = require('@dabeng/react-orgchart').default;
}
const NodeTemplate = require('./node-template');

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
  const [actionVisible, setVisible] = useState(false);
  const [chartData, setData] = useState(null);

  useEffect(() => {
    if (params && params.year) {
      // TODO: cancel request if new params are selected
      axios.get('/api/data/hierarchy', { params })
        .then(({ data }) => {
          setData(data);
          setVisible(true)
          setTimeout(() => {
            const container = document.querySelector('.orgchart-container');
            const content = document.querySelector('.orgchart');
            container.scrollLeft = (content.offsetWidth - container.offsetWidth) / 2;
          }, 200)
        });
    }
  }, [params]);

  return (
    <ChartActions visible={actionVisible} generateDataForSheet={() => generateDataForSheet(chartData)}>
      <div id="hierarchy-chart-container">
        {chartData && <OrganizationChart
          collapsible={false}
          datasource={chartData}
          NodeTemplate={NodeTemplate}
        />}
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
