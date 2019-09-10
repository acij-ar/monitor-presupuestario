const React = require('react');
const {components} = require('react-select');
const ReactTooltip = require('react-tooltip');

const MultiValueContainer = props => {
  props.innerProps['data-tip'] = props.data.name;
  return (
    <React.Fragment>
      <components.MultiValueContainer {...props} />
      <ReactTooltip />
    </React.Fragment>
  );
};

module.exports = MultiValueContainer;
