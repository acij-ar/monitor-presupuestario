const React = require('react');
const Selector = require('./selector');
const axios = require('axios');

const { useEffect, useState } = React;

const ExploreForm = () => {
  let [options, setOptions] = useState({});
  useEffect(async () => {
    const { data } = await axios.get('/api/data/options');
    setOptions(data);
  }, []);

  return (
    <div id="monitor-explore-selector">
      <div id="monitor-explore-selector-labels-who">
        <h3>¿Quién?</h3>
        <Selector id="entity-form-jurisdiccion" name="Jurisdicción" options={options.jurisdictions}/>
        <Selector id="entity-form-entidad" name="Entidad" options={options.entities}/>
      </div>
      <div id="monitor-explore-selector-labels-reason">
        <h3>¿Para qué?</h3>
        <Selector id="entity-form-programa" name="Programa" options={options.programs}/>
        <Selector id="setting-form-years" name="Años disponibles" options={options.years} />
      </div>
      <div id="monitor-explore-selector-labels-what">
        <h3>¿En qué se gasta?</h3>
        <Selector id="entity-form-actividad" name="Actividad" options={options.activities}/>
        <Selector id="entity-form-funcion" name="Función" options={options.functions}/>
        <Selector id="setting-form-budgets" name="Tipos de presup." options={options.budgets} />
        <Selector id="setting-form-inlfation" name="Ajus. por inflación" options={options.inflation} />
      </div>
    </div>
  )
};

module.exports = ExploreForm;
