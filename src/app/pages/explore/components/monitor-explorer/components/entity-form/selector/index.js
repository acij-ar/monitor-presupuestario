const React = require('react');
const PropTypes = require('prop-types');

const Selector = ({ id, name, options }) => (
  <div className="entity-selector-wrapper">
    <select id={id}>
      <option disabled selected>{name}</option>
      {
        options.map(({ name: optionName }) => (
          <option key={optionName}>{optionName}</option>
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
