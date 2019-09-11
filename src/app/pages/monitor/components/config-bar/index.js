const React = require('react');
const EntitySelect = require('./components/entity-select');
const YearSelect = require('./components/year-select');
const BudgetSelect = require('./components/budget-select');
const GroupEntities = require('./components/group-entities');

class ConfigBar extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="monitor-config-bar">
          <div className="monitor-config-bar-content">
            <EntitySelect value={this.props.selectedEntities} onChange={this.props.onSelectedEntitiesChange}/>
            <YearSelect value={this.props.selectedYears} onChange={this.props.onSelectedYearsChange}/>
            <BudgetSelect value={this.props.selectedBudgets} onChange={this.props.onSelectedBudgetsChange}/>
          </div>
        </div>
        <GroupEntities selected={this.props.selectedEntities} />
      </React.Fragment>
    )
  }
}

module.exports = ConfigBar;
