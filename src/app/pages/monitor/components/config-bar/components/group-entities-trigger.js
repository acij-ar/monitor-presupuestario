const React = require('react');

class GroupEntitiesTrigger extends React.PureComponent {
  render() {
    const { selected } = this.props;
    const enabled = selected && selected.length > 1;
    return (
      <label
        id="monitor-config-group-entities-trigger"
        htmlFor="monitor-config-group-entities-switch"
        className={enabled ? 'enabled' : 'disabled'}
      >
        Agrupar
      </label>
    )
  }
}

module.exports = GroupEntitiesTrigger;
