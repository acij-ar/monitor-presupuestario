const React = require('react');
const PropTypes = require('prop-types');
const Selector = require('./selector');

const getMostRecentYear = (options) => {
  if (!options || options.length === 0) return null;
  return options.sort((a, b) => b.value - a.value)[0].value;
}

const getDefaultBudget = (options) => {
  if (!options || options.length === 0) return null;
  return 'Original';
}

const getDefaultInflation = (options) => {
  if (!options || options.length === 0) return null;
  return 'Ajustado'
}

const ExploreForm = ({ options, updateSelected, selected }) => (
  <div id="monitor-explore-selector">
    <div id="monitor-explore-selector-labels-who">
      <h3>¿Quién?</h3>
      <Selector
        id="entity-form-jurisdiccion"
        name="Jurisdicción"
        options={options.jurisdictions}
        onChange={e => updateSelected({ jurisdiction: e.target.value})}
        value={selected.jurisdiction}
      />
      <Selector
        id="entity-form-entidad"
        name="Entidad"
        options={options.entities}
        onChange={e => updateSelected({ entity: e.target.value})}
        value={selected.entity}
      />
    </div>
    <div id="monitor-explore-selector-labels-reason">
      <h3>¿Para qué?</h3>
      <Selector
        id="entity-form-programa"
        name="Programa"
        options={options.programs}
        onChange={e => updateSelected({ program: e.target.value})}
        value={selected.program}
      />
      <Selector
        id="setting-form-years"
        name="Años disponibles"
        options={options.years}
        onChange={e => updateSelected({ year: e.target.value})}
        value={selected.year || getMostRecentYear(options.years)}
      />
    </div>
    <div id="monitor-explore-selector-labels-what">
      <h3>¿En qué se gasta?</h3>
      <Selector
        id="entity-form-actividad"
        name="Actividad"
        options={options.activities}
        onChange={e => updateSelected({ activity: e.target.value})}
        value={selected.activity}
      />
      <Selector
        id="entity-form-funcion"
        name="Función"
        options={options.functions}
        onChange={e => updateSelected({ function: e.target.value})}
        value={selected.function}
      />
      <Selector
        id="setting-form-budgets"
        name="Tipos de presup."
        options={options.budgets}
        onChange={e => updateSelected({ budget: e.target.value})}
        value={selected.budget || getDefaultBudget(options.budgets)}
      />
      <Selector
        id="setting-form-inlfation"
        name="Ajuste por inflación"
        options={options.inflation}
        onChange={e => updateSelected({ inflation: e.target.value})}
        value={selected.inflation || getDefaultInflation(options.inflation)}
      />
    </div>
  </div>
);

ExploreForm.propTypes = {
  updateSelected: PropTypes.func.isRequired,
  selected: PropTypes.shape({
    jurisdiction: PropTypes.string,
    entity: PropTypes.string,
    program: PropTypes.string,
    activity: PropTypes.string,
    year: PropTypes.string,
    function: PropTypes.string,
    budget: PropTypes.string,
    inflation: PropTypes.string,
  }),
  options: PropTypes.shape({
    jurisdictions: PropTypes.array,
    entities: PropTypes.array,
    programs: PropTypes.array,
    activities: PropTypes.array,
    years: PropTypes.array,
    functions: PropTypes.array,
    budgets: PropTypes.array,
    inflation: PropTypes.array,
  }),
};

module.exports = ExploreForm;
