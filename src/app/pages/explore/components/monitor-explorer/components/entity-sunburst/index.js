const React = require('react');
const PropTypes = require('prop-types');
const chart = require('../../../../../../components/chart');
const ChartActions = require('../../../../../../components/monitor/chart-actions');

const { useEffect, useState } = React;

const generateDataForSheet = (chartData) => {
  if (chartData) {
    // TODO: generate data for sunburst
  }
  const header = [];
  const rows = [];
  return [rows, {header}]
}

const EntitySunburst = ({ params }) => {
  let sunburstChart;
  const [actionVisible, setVisible] = useState(false);
  const [chartData, setData] = useState(null);

  useEffect(() => {
    if (params && params.year) {
      chart(sunburstChart, params, '/api/data/sunburst', 'sunburst-chart')
        .then(({ chart, data }) => {
          sunburstChart = chart;
          setVisible(true)
          setData(data);
        });
    }
  }, [params]);

  return (
    <ChartActions visible={actionVisible} generateDataForSheet={() => generateDataForSheet(chartData)}>
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
