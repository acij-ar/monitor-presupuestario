const React = require('react');
const Select = require('react-select').default;
const availableBudgets = require('../../helpers/available-budgets');

const BudgetSelect = ({value, onChange}) => (
    <Select
        placeholder="Tipos de presupuesto"
        value={value}
        options={availableBudgets}
        onChange={onChange}
        isSearchable
        className="monitor-config-bar-budgets-select"
    />
);

module.exports = BudgetSelect;