const React = require('react');
const PropTypes = require('prop-types');
const Selector = require('../../explore-form/selectors/selector');
const SelectorMulti = require('./selector-multi');

const Selectors = ({ options, selected, updateSelected }) => (
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
    <Selector
      id="setting-form-inlfation"
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
};

Selectors.defaultProps = {
  options: {},
  selected: {},
}

module.exports = Selectors;
