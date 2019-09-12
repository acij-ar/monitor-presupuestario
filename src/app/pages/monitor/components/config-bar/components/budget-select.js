const React = require('react');
const Select = require('react-select').default;
const availableBudgets = require('../../../helpers/available-budgets');
const MultiValueContainer = require('./multi-value-container');

const BudgetSelect = ({value, onChange}) => (
  <Select
    placeholder="Tipos de presupuesto"
    value={value}
    options={availableBudgets}
    onChange={onChange}
    isSearchable
    className="monitor-config-bar-budgets-select"
    isMulti
    closeMenuOnSelect={false}
    styles={{
      valueContainer: provided => ({...provided, flexWrap: 'nowrap'})
    }}
    components={{MultiValueContainer}}
  />
);

module.exports = BudgetSelect;
