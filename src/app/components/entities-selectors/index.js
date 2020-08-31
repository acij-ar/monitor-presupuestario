const React = require('react');
const PropTypes = require('prop-types');
const Selector = require('../selector');

const EntitiesSelectors = ({ options, updateSelectedEntity, selected }) => (
  <div className="monitor-selectors">
    <div className="monitor-selector-labels-who">
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
    </div>
    <div className="monitor-selector-labels-reason">
      <h3>¿Para qué?</h3>
      <Selector
        id="entity-form-programa"
        name="Programa"
        options={options.programs}
        onChange={e => updateSelectedEntity(e.id)}
        value={selected.program}
      />
    </div>
    <div className="monitor-selector-labels-what">
      <h3>¿En qué se gasta?</h3>
      <Selector
        id="entity-form-actividad"
        name="Actividad"
        options={options.activities}
        onChange={e => updateSelectedEntity(e.id)}
        value={selected.activity}
      />
    </div>
  </div>
);

EntitiesSelectors.propTypes = {
  updateSelectedEntity: PropTypes.func.isRequired,
  selected: PropTypes.shape({
    jurisdiction: PropTypes.string,
    entity: PropTypes.string,
    program: PropTypes.string,
    activity: PropTypes.string,
  }),
  options: PropTypes.shape({
    jurisdictions: PropTypes.array,
    entities: PropTypes.array,
    programs: PropTypes.array,
    activities: PropTypes.array,
  }),
};

module.exports = EntitiesSelectors;
