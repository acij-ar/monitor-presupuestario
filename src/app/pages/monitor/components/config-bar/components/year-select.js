const React = require('react');
const Select = require('react-select').default;
const availableYears = require('../../../helpers/available-years');
const MultiValueContainer = require('./multi-value-container');
const PropTypes = require('prop-types');

const YearSelect = ({ value, onChange}) => (
  <Select
    placeholder="Años disponibles"
    value={value}
    options={availableYears}
    onChange={onChange}
    isSearchable
    className="monitor-config-bar-years-select"
    isMulti
    closeMenuOnSelect={false}
    styles={{
      valueContainer: provided => ({ ...provided, flexWrap: 'nowrap'}),
      clearIndicator: provided => ({
        ...provided,
        borderLeft: 'solid 1px',
        margin: '8px 0 8px 12px',
        padding: '0 8px',
      }),
    }}
    components={{ MultiValueContainer }}
  />
);

YearSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.array,
};

module.exports = YearSelect;
