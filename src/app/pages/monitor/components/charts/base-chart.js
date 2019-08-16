const React = require('react');
const axios = require('axios');
const ReactHighcharts = require('react-highcharts');

class HistoricBarChar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.downloadChartData();
    }

    componentDidUpdate() {
        if (this.props !== this.state.props) {
            this.downloadChartData();
        }
    }

    downloadChartData() {
        const {selectedYears, selectedBudgets, selectedEntities} = this.props;
        const data = {selectedYears, selectedBudgets, selectedEntities};
        axios.post(this.props.endpoint, data)
            .then(response => this.setState({config: response.data, props: this.props}));
    }

    render() {
        return (
            <div className={`monitor-content monitor-${this.props.name}`}>
                <div className={`monitor-${this.props.name}-container`}>
                    { this.state.config && <ReactHighcharts config={this.state.config} />}
                </div>
            </div>
        )
    }
}

module.exports = HistoricBarChar;

