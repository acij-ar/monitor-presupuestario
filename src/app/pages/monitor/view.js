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
        const defaultYears = [availableYears[0], availableYears[1]];
        const defaultBudget = availableBudgets[0];
        this.state = {
            selectedYears: defaultYears,
            selectedBudgets: [defaultBudget],
            selectedEntities: [],
        };
        this.onSelectedEntitiesChange = this.onSelectedEntitiesChange.bind(this);
        this.onSelectedYearsChange = this.onSelectedYearsChange.bind(this);
        this.onSelectedBudgetsChange = this.onSelectedBudgetsChange.bind(this);
    }

    onSelectedEntitiesChange(selectedEntities) {
        this.setState({selectedEntities})
    }

    onSelectedYearsChange(selectedYears) {
        this.setState({selectedYears});
    }

    onSelectedBudgetsChange(selectedBudgets) {
        this.setState({selectedBudgets});
    }

    render() {
        const {title, description} = this.props;
        const {selectedYears, selectedBudgets, selectedEntities} = this.state;
        const onlyOneCaseSelected = selectedYears && selectedYears.length === 1 &&
            selectedBudgets && selectedBudgets.length === 1 &&
            selectedEntities && selectedEntities.length === 1;
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
                        <EntitySelect value={selectedEntities} onChange={this.onSelectedEntitiesChange}/>
                        <YearSelect value={selectedYears} onChange={this.onSelectedYearsChange}/>
                        <BudgetSelect value={selectedBudgets} onChange={this.onSelectedBudgetsChange}/>
                    </div>
                </div>

                {
                    onlyOneCaseSelected &&
                    <Treemap
                        year={selectedYears[0].value}
                        budgetType={selectedBudgets[0].value}
                        parentName={selectedEntities[0].label}
                        parentTable={selectedEntities[0].table}
                    />
                }

                <div style={{minHeight: '500px'}} />
            </Page>
        );
    }
}

module.exports = App;
