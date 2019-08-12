const React = require('react');
const Page = require('../../components/page');
const Treemap = require('./components/treemap');
const EntitySelect = require('./components/config-bar/entity-select');
const YearSelect = require('./components/config-bar/year-select');
const BudgetSelect = require('./components/config-bar/budget-select');
const HistoricBarChart = require('./components/historic-bar-chart');
require('./index.scss');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedYears: null,
            selectedBudgets: null,
            selectedEntities: null,
        };
        this.onSelectedEntitiesChange = this.onSelectedEntitiesChange.bind(this);
        this.onSelectedYearsChange = this.onSelectedYearsChange.bind(this);
        this.onSelectedBudgetsChange = this.onSelectedBudgetsChange.bind(this);
    }

    onSelectedEntitiesChange(selectedEntities) {
        this.setState({
            selectedEntities: selectedEntities && selectedEntities.length ? selectedEntities : null,
        })
    }

    onSelectedYearsChange(selectedYears) {
        this.setState({
            selectedYears: selectedYears && selectedYears.length ? selectedYears : null,
        });
    }

    onSelectedBudgetsChange(selectedBudgets) {
        this.setState({
            selectedBudgets: selectedBudgets && selectedBudgets.length ? selectedBudgets : null,
        });
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

                <HistoricBarChart
                    selectedYears={selectedYears}
                    selectedBudgets={selectedBudgets}
                    selectedEntities={selectedEntities}
                />

                {
                    onlyOneCaseSelected &&
                    <Treemap
                        year={selectedYears[0].value}
                        budgetType={selectedBudgets[0].value}
                        parentName={selectedEntities[0].label}
                        parentTable={selectedEntities[0].table}
                    />
                }
            </Page>
        );
    }
}

module.exports = App;
