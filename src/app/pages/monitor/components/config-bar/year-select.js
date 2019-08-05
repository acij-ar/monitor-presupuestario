const React = require('react');
const Select = require('react-select').default;
const availableYears = require('../../helpers/available-years');

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
    />
);

module.exports = YearSelect;
