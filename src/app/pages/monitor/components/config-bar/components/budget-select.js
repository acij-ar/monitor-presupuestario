const React = require('react');
const Select = require('react-select').default;
const availableBudgets = require('../../../helpers/available-budgets');
const MultiValueContainer = require('./multi-value-container');
const PropTypes = require('prop-types');

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
      valueContainer: provided => ({...provided, flexWrap: 'nowrap'}),
      clearIndicator: provided => ({
        ...provided,
        borderLeft: 'solid 1px',
        margin: '8px 0 8px 12px',
        padding: '0 8px',
      }),
    }}
    components={{MultiValueContainer}}
  />
);

BudgetSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.array,
};

module.exports = BudgetSelect;
