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
            this.state.props = this.props;
            this.updateSelectedFromList('selectedYears', 'selectedYear');
            this.updateSelectedFromList('selectedBudgets', 'selectedBudget');
            this.updateSelectedFromList('selectedEntities', 'selectedEntity');
            this.setState(this.state);
            this.downloadChartData();
        }
    }

    updateSelectedFromList(listName, selectedName) {
        const haveAvailableOptions = this.props[listName] && this.props[listName].length >= 0;
        const haveOnlyOneOption = this.props[listName] && this.props[listName].length === 1;
        const haveOptionSelected = !!this.state[selectedName];
        if (haveAvailableOptions && (haveOnlyOneOption || !haveOptionSelected)) {
            this.state[selectedName] = this.props[listName][0];
            return
        }
        const selectedOptionIsInAvailableOptions = (this.props[listName] || []).find(option => option.value === this.state[selectedName].value)
        if (!haveAvailableOptions || !selectedOptionIsInAvailableOptions) {
            this.state[selectedName] = null;
        }
    }

    downloadChartData() {
        const {selectedYear, selectedBudget, selectedEntity} = this.state;
        const data = {selectedYear, selectedBudget, selectedEntity};
        axios.post(this.props.endpoint, data)
            .then(response => this.setState({config: response.data}));
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

