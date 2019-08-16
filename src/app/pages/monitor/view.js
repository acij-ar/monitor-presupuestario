const React = require('react');
const Page = require('../../components/page');
const EntitySelect = require('./components/config-bar/entity-select');
const YearSelect = require('./components/config-bar/year-select');
const BudgetSelect = require('./components/config-bar/budget-select');
const BaseChart = require('./components/charts/base-chart');
const CarrouselChart = require('./components/charts/carrousel-chart');
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
                <CarrouselChart
                    name="treemap"
                    endpoint="/api/db/treemap"
                    selectedYears={selectedYears}
                    selectedBudgets={selectedBudgets}
                    selectedEntities={selectedEntities}
                />
                <BaseChart
                    name="historic-bar-chart"
                    endpoint="/api/db/historic-bar-chart"
                    selectedYears={selectedYears}
                    selectedBudgets={selectedBudgets}
                    selectedEntities={selectedEntities}
                />
            </Page>
        );
    }
}

module.exports = App;
