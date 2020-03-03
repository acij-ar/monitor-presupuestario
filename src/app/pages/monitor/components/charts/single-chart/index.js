const React = require('react');
const PropTypes = require('prop-types');
const Chart = require('../base-chart');

class SingleChart extends React.Component {
  render() {
    const {selectedYears, selectedBudgets, selectedEntities, endpoint} = this.props;
    const data = {selectedYears, selectedBudgets, selectedEntities};
    return (
      <div className={'monitor-content monitor-chart-container'}>
        <div className={'monitor-chart'}>
          <Chart data={data} endpoint={endpoint} />
        </div>
      </div>
    );
  }
}

SingleChart.propTypes = {
  selectedEntities: PropTypes.array,
  selectedYears: PropTypes.array,
  selectedBudgets: PropTypes.array,
  endpoint: PropTypes.string.isRequired,
};

module.exports = SingleChart;

