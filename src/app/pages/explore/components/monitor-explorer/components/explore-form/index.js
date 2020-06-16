const React = require('react');
const Selector = require('./selector');

// TODO: pass real options to selects

const ExploreForm = () => (
  <div id="monitor-explore-selector">
    <div id="monitor-explore-selector-labels-who">
      <h3>¿Quién?</h3>
      <Selector id="entity-form-jurisdiccion" name="Jurisdicción" options={[{}]}/>
      <Selector id="entity-form-entidad" name="Entidad" options={[{}]}/>
    </div>
    <div id="monitor-explore-selector-labels-reason">
      <h3>¿Para qué?</h3>
      <Selector id="entity-form-programa" name="Programa" options={[{}]}/>
      <Selector id="setting-form-years" name="Años disponibles" options={[{}]} />
    </div>
    <div id="monitor-explore-selector-labels-what">
      <h3>¿En qué se gasta?</h3>
      <Selector id="entity-form-actividad" name="Actividad" options={[{}]}/>
      <Selector id="entity-form-funcion" name="Función" options={[{}]}/>
      <Selector id="setting-form-budgets" name="Tipos de presup." options={[{}]} />
      <Selector id="setting-form-inlfation" name="Ajus. por inflación" options={[{}]} />
    </div>
  </div>
);

module.exports = ExploreForm;
