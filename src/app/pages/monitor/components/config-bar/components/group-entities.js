const React = require('react');

class GroupEntities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showGroups = this.showGroups.bind(this);
  }

  showGroups() {

  }

  render() {
    const { selected } = this.props;
    const enabled = selected && selected.length > 2;
    return (
      <React.Fragment>
        <a onClick={this.showGroups} id="monitor-config-group-entities-trigger" className={enabled ? 'enabled' : 'disabled'}>
          Agrupar
        </a>
      </React.Fragment>
    )
  }
}

module.exports = GroupEntities;
