const React = require('react');

class GroupEntities extends React.PureComponent {
  render() {
    const { selected } = this.props;
    return (
      <React.Fragment>
        <input type="checkbox" id="monitor-config-group-entities-switch" />
        <div id="monitor-config-group-entitie-container" />
      </React.Fragment>
    )
  }
}

module.exports = GroupEntities;
