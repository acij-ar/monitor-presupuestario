const React = require('react');
const Select = require('react-select').default;
const PropTypes = require('prop-types');
const styles = require('./styles');
const Option = require('./custom-option');
const customFilter = require('./custom-filter');

const findValue = (options, value) => options && value && options.find(({label, id}) => label === value || id === value);

const Selector = ({ id, name, options, value, onChange, isMulti }) => {
  const disabled = !options || options.length === 0;
  const selectedValue = isMulti ? value : findValue(options, value);
  return (
    <div className={`selector-wrapper ${disabled ? 'selector-wrapper-disabled' : ''}`} id={id}>
      <Select
        instanceId={`react-select-${id}-input`}
        isDisabled={disabled}
        isMulti={isMulti}
        placeholder={name}
        value={selectedValue || null}
        options={options}
        onChange={onChange}
        isSearchable
        closeMenuOnSelect={!isMulti}
        styles={styles}
        components={{ Option }}
        filterOption={customFilter}
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
    PropTypes.array
  ]),
  isMulti: PropTypes.bool,
};

Selector.defaultProps = {
  isMulti: false,
}

module.exports = Selector;
