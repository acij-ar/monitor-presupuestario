const React = require('react');
const PropTypes = require('prop-types');
const { components: { Option } } = require('react-select');

const CustomOption = ({ innerProps, ...otherProps }) => {
  delete innerProps.onMouseMove;
  delete innerProps.onMouseOver;
  return (
    <Option {...otherProps} innerProps={innerProps} isFocused={false} className="selector-custom-option" />
  )
}

CustomOption.propTypes = {
  innerProps: PropTypes.shape({
    onMouseMove: PropTypes.func,
    onMouseOver: PropTypes.func,
  }),
}

module.exports = CustomOption;
