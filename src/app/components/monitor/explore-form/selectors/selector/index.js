const React = require('react');
const Select = require('react-select').default;
const PropTypes = require('prop-types');
const styles = require('./styles');

const Selector = ({ id, name, options, value, onChange }) => {
  const disabled = !options || options.length === 0;
  return (
    <div className={`selector-wrapper ${disabled ? 'selector-wrapper-disabled' : ''}`} id={id}>
      <Select
        isDisabled={disabled}
        placeholder={name}
        value={options && value && options.find(({label, id}) => label === value || id === value)}
        options={options}
        onChange={onChange}
        isSearchable
        closeMenuOnSelect
        styles={styles}
      />
    </div>
  )
};

Selector.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  })),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

module.exports = Selector;
