const React = require('react');
const axios = require('axios');
const ReactHighcharts = require('react-highcharts');

class HistoricBarChar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.downloadBarChartData();
    }

    componentDidUpdate() {
        if (this.props !== this.state.props) {
            this.downloadBarChartData();
        }
    }

    downloadBarChartData() {
        const {selectedYears, selectedBudgets, selectedEntities} = this.props;
        const params = {selectedYears, selectedBudgets, selectedEntities};
        axios.get('/api/db/bar-chart', {params})
            .then(response => this.setState({config: response.data, props: this.props}));
    }

    render() {

        return (
            <div className="monitor-content monitor-bar-chart">
                <div className="monitor-bar-chart-container">
                    { this.state.config && <ReactHighcharts config={this.state.config} />}
                </div>
            </div>
        )
    }
}

module.exports = HistoricBarChar;

