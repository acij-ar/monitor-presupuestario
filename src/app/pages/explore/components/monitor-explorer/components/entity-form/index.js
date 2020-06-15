const React = require('react');
const EntitySelector = require('./selector');

const EntityForm = () => (
  <div id="monitor-explore-selector">
    <div id="monitor-explore-selector-labels">
      <div id="monitor-explore-selector-labels-who">
        <span>¿Quién?</span>
      </div>
      <div id="monitor-explore-selector-labels-reason">
        <span>¿Para qué?</span>
      </div>
      <div id="monitor-explore-selector-labels-what">
        <span>¿En qué se gasta?</span>
      </div>
    </div>
    <div id="monitor-explore-selectors">
      <EntitySelector id="entity-form-jurisdiccion" name="Jurisdicción" options={[{}]} />
      <EntitySelector id="entity-form-entidad" name="Entidad" options={[{}]} />
      <EntitySelector id="entity-form-programa" name="Programa" options={[{}]} />
      <EntitySelector id="entity-form-actividad" name="Actividad" options={[{}]} />
      <EntitySelector id="entity-form-funcion" name="Función" options={[{}]} />
    </div>
    <div id="monitor-settings-selectors">
    </div>
  </div>
)

module.exports = EntityForm;
