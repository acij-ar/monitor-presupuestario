const React = require('react');
const Chart = require('./chart');

class CarrouselChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    componentDidUpdate() {
        if (this.props !== this.state.props) {
            this.state.props = this.props;
            this.updateSelectedFromList('selectedYears', 'selectedYear');
            this.updateSelectedFromList('selectedBudgets', 'selectedBudget');
            this.updateSelectedFromList('selectedEntities', 'selectedEntity');
            this.setState(this.state);
        }
    }

    updateSelectedFromList(listName, selectedName) {
        const haveAvailableOptions = this.props[listName] && this.props[listName].length >= 0;
        const haveOnlyOneOption = this.props[listName] && this.props[listName].length === 1;
        const haveOptionSelected = !!this.state.data[selectedName];
        if (haveAvailableOptions && (haveOnlyOneOption || !haveOptionSelected)) {
            this.state.data[selectedName] = this.props[listName][0];
            return
        }
        const selectedOptionIsInAvailableOptions = (this.props[listName] || []).find(option => option.value === this.state.data[selectedName].value)
        if (!haveAvailableOptions || !selectedOptionIsInAvailableOptions) {
            this.state.data[selectedName] = null;
        }
    }

    render() {
        return (
            <div className={`monitor-content monitor-chart-container`}>
                <div className={`monitor-chart`}>
                    <Chart data={this.state.data} endpoint={this.props.endpoint} />
                </div>
            </div>
        )
    }
}

module.exports = CarrouselChart;

