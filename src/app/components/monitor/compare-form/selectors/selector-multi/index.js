const React = require('react');
const Select = require('react-select').default;
const PropTypes = require('prop-types');
const styles = require('../../../../selector/styles');

const SelectorMulti = ({ id, name, options, value, onChange }) => {
  const disabled = !options || options.length === 0;
  return (
    <div className={`selector-wrapper ${disabled ? 'selector-wrapper-disabled' : ''}`} id={id}>
      <Select
        isDisabled={disabled}
        placeholder={name}
        value={value}
        options={options}
        onChange={onChange}
        isSearchable
        isMulti
        closeMenuOnSelect={false}
        styles={styles}
      />
    </div>
  )
};

SelectorMulti.propTypes = {
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
  value: PropTypes.array,
  isMulti: PropTypes.bool,
};

SelectorMulti.defaultProps = {
  isMulti: false,
}

module.exports = SelectorMulti;
