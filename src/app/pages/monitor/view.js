const React = require('react');
const Page = require('../../components/page');
const EntitySelect = require('./components/config-bar/entity-select');
const YearSelect = require('./components/config-bar/year-select');
const BudgetSelect = require('./components/config-bar/budget-select');
const SingleChart = require('./components/charts/single-chart');
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

        {selectedEntities && selectedEntities.length > 0 ?
          <div className="monitor-content">
            <div className="monitor-disclaimer">
              Estas jurisdicciones, entidades, actividades y programas pueden tener cambios en su contenido a lo
              largo del tiempo. Para tener certeza sobre la comparabilidad de los programas es necesario consultar
              las acciones y resultados proyectados y llevados adelante en la ley de presupuesto, la cuenta de
              inversión y los informes de seguimiento físico financiero
            </div>
          </div> : null}

        <CarrouselChart
          endpoint="/api/db/treemap"
          selectedYears={selectedYears}
          selectedBudgets={selectedBudgets}
          selectedEntities={selectedEntities}
        />
        <SingleChart
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
