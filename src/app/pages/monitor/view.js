const React = require('react');
const Page = require('../../components/page');
const Treemap = require('./components/treemap');
const Select = require('react-select').default;
const availableYears = require('./helpers/available-years');
const availableBudgets = require('./helpers/available-budgets');
require('./index.scss');

class App extends React.Component {
    constructor(props) {
        super(props);

        const lastYear = availableYears[availableYears.length - 1];
        const defaultBudget = availableBudgets[0];
        this.state = {
            selectedYears: [lastYear],
            selectedBudgets: [defaultBudget],
            selectedEntities: [],
        };
        this.onSelectedEntitiesChange = this.onSelectedEntitiesChange.bind(this);
        this.onSelectedYearsChange = this.onSelectedYearsChange.bind(this);
        this.onSelectedBudgetTypesChange = this.onSelectedBudgetTypesChange.bind(this);
    }

    onSelectedEntitiesChange(selectedEntities) {
        this.setState({selectedEntities})
    }

    onSelectedYearsChange(selectedYears) {
        this.setState({selectedYears});
    }

    onSelectedBudgetTypesChange(selectedBudgets) {
        this.setState({selectedBudgets});
    }

    render() {
        const {treemapData, title, description} = this.props;
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
                        <Select
                            name="entities"
                            placeholder="Dependencias del presupuesto"
                            value={this.state.selectedEntities}
                            options={availableYears}
                            onChange={this.onSelectedEntitiesChange}
                            isMulti
                            isSearchable
                            closeMenuOnSelect={false}
                            className="monitor-config-bar-entities-select"
                        />
                        <Select
                            name="years"
                            placeholder="Años disponibles"
                            value={this.state.selectedYears}
                            options={availableYears}
                            onChange={this.onSelectedYearsChange}
                            isMulti
                            isSearchable
                            closeMenuOnSelect={false}
                            className="monitor-config-bar-years-select"
                        />
                        <Select
                            name="budget"
                            placeholder="Tipos de presupuesto"
                            value={this.state.selectedBudgets}
                            options={availableBudgets}
                            onChange={this.onSelectedBudgetTypesChange}
                            isMulti
                            isSearchable
                            closeMenuOnSelect={false}
                            className="monitor-config-bar-budgets-select"
                        />
                    </div>
                </div>

                <div className="monitor-content monitor-treemap">
                    <Treemap data={treemapData}/>
                    <Treemap data={treemapData}/>
                </div>
            </Page>
        );
    }
}

module.exports = App;
