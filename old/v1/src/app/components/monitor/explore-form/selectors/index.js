const React = require('react');
const PropTypes = require('prop-types');
const Selector = require('../../../selector');
const ResetButton = require('./reset-button');
const EntitiesSelectors = require('../../../entities-selectors');

const Selectors = ({ options, updateSelectedOption, updateSelectedEntity, selected }) => (
  <div id="monitor-explore-selectors">
    <EntitiesSelectors
      options={options}
      updateSelectedEntity={(e) => updateSelectedEntity(e.id)}
      selected={selected}
    />
    <div className="monitor-selectors monitor-selectors-options">
      <div className="monitor-selector-labels-who">
        <h3>Año</h3>
        <ResetButton selected={selected} updateSelectedEntity={updateSelectedEntity} />
        <Selector
          id="setting-form-years"
          name="Años disponibles"
          options={options.years}
          onChange={e => updateSelectedOption({ year: e.value})}
          value={selected.year}
        />
      </div>
      <div className="monitor-selector-labels-reason">
        <h3>Tipo de presupuesto</h3>
        <Selector
          id="setting-form-budgets"
          name="Tipos de presup."
          options={options.budgets}
          onChange={e => updateSelectedOption({ budget: e.value})}
          value={selected.budget}
        />
      </div>
      <div className="monitor-selector-labels-what">
        <h3>Ajuste por inflación</h3>
        <Selector
          id="setting-form-inflation"
          name="Ajuste por inflación"
          options={options.inflation}
          onChange={e => updateSelectedOption({ inflation: e.value})}
          value={selected.inflation}
        />
      </div>
    </div>
  </div>
);

Selectors.propTypes = {
  updateSelectedOption: PropTypes.func.isRequired,
  updateSelectedEntity: PropTypes.func.isRequired,
  selected: PropTypes.shape({
    jurisdiction: PropTypes.string,
    entity: PropTypes.string,
    program: PropTypes.string,
    activity: PropTypes.string,
    year: PropTypes.number,
    budget: PropTypes.string,
    inflation: PropTypes.string,
  }),
  options: PropTypes.shape({
    jurisdictions: PropTypes.array,
    entities: PropTypes.array,
    programs: PropTypes.array,
    activities: PropTypes.array,
    years: PropTypes.array,
    budgets: PropTypes.array,
    inflation: PropTypes.array,
  }),
};

module.exports = Selectors;
