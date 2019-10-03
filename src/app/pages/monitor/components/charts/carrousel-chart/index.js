const React = require('react');
const Chart = require('../base-chart');
const Chevron = require('./chevron');

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
      return;
    }
    const selectedOptionIsInAvailableOptions = (this.props[listName] || []).find(option => option.value === this.state.data[selectedName].value);
    if (!haveAvailableOptions || !selectedOptionIsInAvailableOptions) {
      this.state.data[selectedName] = null;
    }
  }

  switch(listName, selectedName, direction) {
    const currentlySelectedOption = this.state.data[selectedName];
    if (this.props[listName] && this.props[listName].length > 1) {
      const indexOfSelected = (this.props[listName] || []).findIndex(option => option.value === currentlySelectedOption.value);
      const nextSelectedIndex = direction === 'next' ?
        (this.props[listName].length + indexOfSelected + 1) % this.props[listName].length :
        (this.props[listName].length + indexOfSelected - 1) % this.props[listName].length;
      this.state.data[selectedName] = this.props[listName][nextSelectedIndex];
      this.setState(this.state);
    }
  }

  switchPrev(listName, selectedName) {
    this.switch(listName, selectedName, 'prev');
  }

  switchNext(listName, selectedName) {
    this.switch(listName, selectedName, 'next');
  }

  render() {
    return (
      <div className="monitor-content monitor-chart-container">
        <div className="monitor-chart monitor-chart-with-switches">
          <div className="monitor-chart-switchs">
            {this.props.selectedYears && this.props.selectedYears.length > 1 &&
                        <div onClick={() => this.switchPrev('selectedYears', 'selectedYear')} className="monitor-chart-switch">
                          <Chevron direction="left" />
                            Año
                        </div>}
            {this.props.selectedEntities && this.props.selectedEntities.length > 1 &&
                        <div onClick={() => this.switchPrev('selectedEntities', 'selectedEntity')} className="monitor-chart-switch">
                          <Chevron direction="left" />
                            Entidad
                        </div>}
            {this.props.selectedBudgets && this.props.selectedBudgets.length > 1 &&
                        <div onClick={() => this.switchPrev('selectedBudgets', 'selectedBudget')} className="monitor-chart-switch">
                          <Chevron direction="left" />
                            Presupuesto
                        </div>}
          </div>
          <Chart data={this.state.data} endpoint={this.props.endpoint} />
          <div className="monitor-chart-switchs">
            {this.props.selectedYears && this.props.selectedYears.length > 1 &&
                        <div onClick={() => this.switchNext('selectedYears', 'selectedYear')} className="monitor-chart-switch">
                            Año
                          <Chevron direction="right" />
                        </div>}
            {this.props.selectedEntities && this.props.selectedEntities.length > 1 &&
                        <div onClick={() => this.switchNext('selectedEntities', 'selectedEntity')} className="monitor-chart-switch">
                            Entidad
                          <Chevron direction="right" />
                        </div>}
            {this.props.selectedBudgets && this.props.selectedBudgets.length > 1 &&
                        <div onClick={() => this.switchNext('selectedBudgets', 'selectedBudget')} className="monitor-chart-switch">
                            Presupuesto
                          <Chevron direction="right" />
                        </div>}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = CarrouselChart;

