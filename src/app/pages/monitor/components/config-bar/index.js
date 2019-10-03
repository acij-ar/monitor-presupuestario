const React = require('react');
const EntitySelect = require('./components/entity-select');
const YearSelect = require('./components/year-select');
const BudgetSelect = require('./components/budget-select');
const GroupEntities = require('./components/group-entities');

class ConfigBar extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <div className="monitor-config-bar">
        {
          props.selectedEntities && props.selectedEntities.length > 1 ?
            <input type="checkbox" id="monitor-config-group-entities-switch" /> : null
        }
        <div className="monitor-config-bar-content">
          <EntitySelect value={props.selectedEntities} onChange={props.onSelectedEntitiesChange}/>
          <YearSelect value={props.selectedYears} onChange={props.onSelectedYearsChange}/>
          <BudgetSelect value={props.selectedBudgets} onChange={props.onSelectedBudgetsChange}/>
        </div>
        {
          props.selectedEntities && props.selectedEntities.length > 1 ?
            <GroupEntities selected={props.selectedEntities} onGroupsChange={props.onGroupsChange} /> : null
        }
      </div>
    );
  }
}

module.exports = ConfigBar;
