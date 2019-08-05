const React = require('react');
const Page = require('../../components/page');
const Treemap = require('./components/treemap');
const availableYears = require('./helpers/available-years');
const availableBudgets = require('./helpers/available-budgets');
const EntitySelect = require('./components/config-bar/entity-select');
const YearSelect = require('./components/config-bar/year-select');
const BudgetSelect = require('./components/config-bar/budget-select');
require('./index.scss');

class App extends React.Component {
    constructor(props) {
        super(props);
        const defaultYear = availableYears[0];
        const defaultBudget = availableBudgets[0];
        this.state = {
            selectedYear: defaultYear,
            selectedBudget: defaultBudget,
            selectedEntity: null,
        };
        this.onSelectedEntityChange = this.onSelectedEntityChange.bind(this);
        this.onSelectedYearChange = this.onSelectedYearChange.bind(this);
        this.onSelectedBudgetChange = this.onSelectedBudgetChange.bind(this);
    }

    onSelectedEntityChange(selectedEntity) {
        this.setState({selectedEntity})
    }

    onSelectedYearChange(selectedYear) {
        this.setState({selectedYear});
    }

    onSelectedBudgetChange(selectedBudget) {
        this.setState({selectedBudget});
    }

    render() {
        const {title, description} = this.props;
        const {selectedYear, selectedBudget, selectedEntity} = this.state;
        return (
            <Page>
                <div className="monitor-highlight">
                    <div className="monitor-content">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>

                <div className="monitor-config-bar">
                    <div className="monitor-config-bar-content">
                        <EntitySelect value={selectedEntity} onChange={this.onSelectedEntityChange}/>
                        <YearSelect value={selectedYear} onChange={this.onSelectedYearChange}/>
                        <BudgetSelect value={selectedBudget} onChange={this.onSelectedBudgetChange}/>
                    </div>
                </div>

                <Treemap {...this.state}/>
            </Page>
        );
    }
}

module.exports = App;
