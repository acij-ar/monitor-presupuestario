const React = require('react');
const PropTypes = require('prop-types');
const Selector = require('../../explore-form/selectors/selector');
const ResetButton = require('./reset-button');
const SelectorMulti = require('./selector-multi');

const Selectors = ({ options, selected, updateSelected, groups, resetSelection }) => (
  <div id="monitor-explore-selector">
    <SelectorMulti
      id="setting-form-years"
      name="Año"
      options={options.years}
      onChange={year => updateSelected({ year })}
      value={selected.year}
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
