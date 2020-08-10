const React = require('react');
const PropTypes = require('prop-types');
const ChartActions = require('../../../../../../components/monitor/chart-actions');
const DataClient = require('../../../../../../components/data-client');
const OrganizationChart = require('./organization-chart');
const NodeTemplate = require('./node-template');
const generateDataForSheet = require('./generate-data-for-sheet');

const { useEffect, useState } = React;
const dataClient = new DataClient({ url: '/api/data/hierarchy' });

const EntityHierarchy = ({ params }) => {
  const [actionVisible, setVisible] = useState(false);
  const [chartData, setData] = useState(null);

  const dataCallback = (data) => {
    setData(data);
    setVisible(true)
    setTimeout(() => {
      const container = document.querySelector('.orgchart-container');
      const content = document.querySelector('.orgchart');
      container.scrollLeft = (content.offsetWidth - container.offsetWidth) / 2;
    }, 200)
  };

  useEffect(() => {
    if (params && params.year) {
      dataClient.get(params, dataCallback);
    }
  }, [params]);

  return (
    <ChartActions visible={actionVisible} generateDataForSheet={() => generateDataForSheet(chartData)} customSelector='.orgchart'>
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
