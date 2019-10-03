const React = require('react');
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

module.exports = SingleChart;

