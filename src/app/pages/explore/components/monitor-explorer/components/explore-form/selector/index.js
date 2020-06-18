const React = require('react');
const PropTypes = require('prop-types');

const Selector = ({ id, name, options, value, onChange }) => (
  <div className="selector-wrapper" id={id}>
    <select id={`${id}-select`} value={value || 'undefined'} onChange={onChange}>
      <option disabled value="undefined">{name}</option>
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
    name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  })),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func.isRequired,
};

module.exports = Selector;
