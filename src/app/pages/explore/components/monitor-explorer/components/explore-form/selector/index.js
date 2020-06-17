const React = require('react');
const PropTypes = require('prop-types');

const Selector = ({ id, name, options }) => (
  <div className="selector-wrapper" id={id}>
    <select id={`${id}-select`}>
      <option disabled selected>{name}</option>
      {
        options && options.map(({ name: optionName, value }) => (
          <option key={optionName} value={value}>{optionName}</option>
        ))
      }
    </select>
  </div>
);

Selector.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

module.exports = Selector;
