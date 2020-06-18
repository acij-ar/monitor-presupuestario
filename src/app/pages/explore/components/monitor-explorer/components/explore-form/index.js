const React = require('react');
const Selector = require('./selector');
const axios = require('axios');

const { useEffect, useState } = React;

const ExploreForm = () => {
  const [options, setOptions] = useState({});
  const fetchData = async () => {
    const { data } = await axios.get('/api/data/options');
    setOptions(data);
  };
  useEffect(() => { fetchData() }, []);

  const [selected, setSelected] = useState({});
  const updateSelected = newValues => setSelected({ ...selected, ...newValues });

  return (
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
          value={selected.year}
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
          value={selected.budget}
        />
        <Selector
          id="setting-form-inlfation"
          name="Ajus. por inflación"
          options={options.inflation}
          onChange={e => updateSelected({ inflation: e.target.value})}
          value={selected.inflation}
        />
      </div>
    </div>
  )
};

module.exports = ExploreForm;
