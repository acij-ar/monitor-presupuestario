const React = require('react');
const PropTypes = require('prop-types');
const chart = require('../../../../../../components/chart');
const ChartActions = require('../../../../../../components/monitor/chart-actions');
const generateDataForSheet = require('./generate-data-for-sheet');

const { useEffect, useState } = React;

const EntitiesNightingaleRose = ({ params }) => {
  let nightingaleChart;
  const [actionVisible, setVisible] = useState(false);
  const [chartData, setData] = useState(null);

  useEffect(() => {
    chart(nightingaleChart, params, '/api/data/nightingale', 'nightingale-compare-chart')
      .then(({ chart, data }) => {
        nightingaleChart = chart;
        setVisible(true)
        setData(data);
      });
  }, [params]);

  return (
    <ChartActions visible={actionVisible} generateDataForSheet={() => generateDataForSheet(chartData)}>
      <div id="nightingale-compare-chart" />
    </ChartActions>
  )
}

EntitiesNightingaleRose.propTypes = {
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

module.exports = EntitiesNightingaleRose;
