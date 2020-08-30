const React = require('react');
const PropTypes = require('prop-types');
const Selector = require('../../../selector');
const ResetButton = require('./reset-button');

const Selectors = ({ options, selected, updateSelected, groups, resetSelection }) => (
  <div id="monitor-explore-selector">
    <Selector
      id="setting-form-years"
      name="Año"
      options={options.years}
      onChange={years => updateSelected({ years })}
      value={selected.years}
      isMulti
    />
    <Selector
      id="setting-form-budgets"
      name="Tipos de presup."
      options={options.budgets}
      onChange={e => updateSelected({ budget: e.value })}
      value={selected.budget}
    />
    <ResetButton groups={groups} resetSelection={resetSelection} />
    <Selector
      id="setting-form-inflation"
      name="Ajuste por inflación"
      options={options.inflation}
      onChange={e => updateSelected({ inflation: e.value })}
      value={selected.inflation}
    />
  </div>
);

Selectors.propTypes = {
  options: PropTypes.object,
  selected: PropTypes.object,
  updateSelected: PropTypes.func.isRequired,
  resetSelection: PropTypes.func.isRequired,
  groups: PropTypes.array.isRequired,
};

Selectors.defaultProps = {
  options: {},
  selected: {},
}

module.exports = Selectors;
