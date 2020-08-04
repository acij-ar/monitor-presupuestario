const React = require('react');
const PropTypes = require('prop-types');
const Selector = require('./selector');
const ResetButton = require('./reset-button');

const Selectors = ({ options, updateSelectedOption, updateSelectedEntity, selected }) => (
  <div id="monitor-explore-selector">
    <div id="monitor-explore-selector-labels-who">
      <h3>¿Quién?</h3>
      <Selector
        id="entity-form-jurisdiccion"
        name="Jurisdicción"
        options={options.jurisdictions}
        onChange={e => updateSelectedEntity(e.id)}
        value={selected.jurisdiction}
      />
      <Selector
        id="entity-form-entidad"
        name="Entidad"
        options={options.entities}
        onChange={e => updateSelectedEntity(e.id)}
        value={selected.entity}
      />
      <ResetButton selected={selected} updateSelectedEntity={updateSelectedEntity} />
      <Selector
        id="setting-form-years"
        name="Años disponibles"
        options={options.years}
        onChange={e => updateSelectedOption({ year: e.value})}
        value={selected.year}
      />
    </div>
    <div id="monitor-explore-selector-labels-reason">
      <h3>¿Para qué?</h3>
      <Selector
        id="entity-form-programa"
        name="Programa"
        options={options.programs}
        onChange={e => updateSelectedEntity(e.id)}
        value={selected.program}
      />
      <Selector
        id="setting-form-budgets"
        name="Tipos de presup."
        options={options.budgets}
        onChange={e => updateSelectedOption({ budget: e.value})}
        value={selected.budget}
      />
    </div>
    <div id="monitor-explore-selector-labels-what">
      <h3>¿En qué se gasta?</h3>
      <Selector
        id="entity-form-actividad"
        name="Actividad"
        options={options.activities}
        onChange={e => updateSelectedEntity(e.id)}
        value={selected.activity}
      />
      <Selector
        id="setting-form-inlfation"
        name="Ajuste por inflación"
        options={options.inflation}
        onChange={e => updateSelectedOption({ inflation: e.value})}
        value={selected.inflation}
      />
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
