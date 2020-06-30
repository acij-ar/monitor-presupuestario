const React = require('react');
const PropTypes = require('prop-types');
const Selector = require('./selector');

const ExploreForm = ({ options, updateSelectedOption, updateSelectedEntity, selected }) => (
  <div id="monitor-explore-selector">
    <div id="monitor-explore-selector-labels-who">
      <h3>¿Quién?</h3>
      <Selector
        id="entity-form-jurisdiccion"
        name="Jurisdicción"
        options={options.jurisdictions}
        onChange={e => updateSelectedEntity(e.target.value)}
        value={selected.jurisdiction}
      />
      <Selector
        id="entity-form-entidad"
        name="Entidad"
        options={options.entities}
        onChange={e => updateSelectedEntity(e.target.value)}
        value={selected.entity}
      />
    </div>
    <div id="monitor-explore-selector-labels-reason">
      <h3>¿Para qué?</h3>
      <Selector
        id="entity-form-programa"
        name="Programa"
        options={options.programs}
        onChange={e => updateSelectedEntity(e.target.value)}
        value={selected.program}
      />
      <Selector
        id="setting-form-years"
        name="Años disponibles"
        options={options.years}
        onChange={e => updateSelectedOption({ year: e.target.value})}
        value={selected.year}
      />
    </div>
    <div id="monitor-explore-selector-labels-what">
      <h3>¿En qué se gasta?</h3>
      <Selector
        id="entity-form-actividad"
        name="Actividad"
        options={options.activities}
        onChange={e => updateSelectedEntity(e.target.value)}
        value={selected.activity}
      />
      <Selector
        id="entity-form-funcion"
        name="Función"
        options={options.functions}
        onChange={e => updateSelectedEntity(e.target.value)}
        value={selected.function}
      />
      <Selector
        id="setting-form-budgets"
        name="Tipos de presup."
        options={options.budgets}
        onChange={e => updateSelectedOption({ budget: e.target.value})}
        value={selected.budget}
      />
      <Selector
        id="setting-form-inlfation"
        name="Ajuste por inflación"
        options={options.inflation}
        onChange={e => updateSelectedOption({ inflation: e.target.value})}
        value={selected.inflation}
      />
    </div>
  </div>
);

ExploreForm.propTypes = {
  updateSelectedOption: PropTypes.func.isRequired,
  updateSelectedEntity: PropTypes.func.isRequired,
  selected: PropTypes.shape({
    jurisdiction: PropTypes.string,
    entity: PropTypes.string,
    program: PropTypes.string,
    activity: PropTypes.string,
    year: PropTypes.number,
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
