const React = require('react');
const Chart = require('./chart');

class SingleChart extends React.PureComponent {
    render() {
        return (
            <div className={`monitor-content monitor-chart-container`}>
                <div className={`monitor-chart`}>
                    <Chart {...this.props} />
                </div>
            </div>
        )
    }
}

module.exports = SingleChart;

