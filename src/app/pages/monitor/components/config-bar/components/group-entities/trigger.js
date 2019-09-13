const React = require('react');
const ReactTooltip = require('react-tooltip');

class GroupEntitiesTrigger extends React.PureComponent {
  render() {
    const { selected } = this.props;
    const enabled = selected && selected.length > 1;
    return (
      enabled ?
        <label
          id="monitor-config-group-entities-trigger"
          htmlFor="monitor-config-group-entities-switch"
        /> :
        <span
          id="monitor-config-group-entities-disabled-trigger"
          data-tip="Elige al menos 2 entidades, programas o actividades para poder agruparlas"
        >
          Agrupar
          <ReactTooltip className="monitor-config-group-trigger-tooltip"/>
        </span>
    )
  }
}

module.exports = GroupEntitiesTrigger;
