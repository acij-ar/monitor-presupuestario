const React = require('react');
const PropTypes = require('prop-types');
const chart = require('../../../../../../components/chart');
const ChartActions = require('../../../../../../components/monitor/chart-actions');
const generateDataForSheet = require('./generate-data-for-sheet');

const { useEffect, useState } = React;

const EntitiesTimeseriesArea = ({ params }) => {
  let timeseriesChart;
  const [actionVisible, setVisible] = useState(false);
  const [chartData, setData] = useState(null);

  useEffect(() => {
    chart(timeseriesChart, params, '/api/data/timeseries-compare', 'timeseries-compare-chart')
      .then(({ chart, data }) => {
        timeseriesChart = chart;
        setVisible(true)
        setData(data);
      });
  }, [params]);

  return (
    <ChartActions visible={actionVisible} generateDataForSheet={() => generateDataForSheet(chartData)}>
      <div id="timeseries-compare-chart" />
    </ChartActions>
  )
}

EntitiesTimeseriesArea.propTypes = {
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

module.exports = EntitiesTimeseriesArea;
