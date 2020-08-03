const React = require('react');
const PropTypes = require('prop-types');
const axios = require('axios');

const { useEffect, useState } = React;

const EntityGoals = ({ params }) => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    // TODO: cancel request if new params are selected
    if (params && params.program && !params.activity) {
      axios.get('/api/data/goals', { params })
        .then(({ data }) => setGoals(data));
    }
  }, [params]);

  return goals && goals.length > 0 ? (
    <div id="monitor-explorer-entity-goals">
      <div id="monitor-explorer-entity-goals-reference">
        ¿Cómo se controla la evolución de este programa / actividad?
      </div>
      <div id="monitor-explorer-entity-goals-list">
        <div id="monitor-explorer-entity-goals-title">
          Metas físicas
        </div>
        <ul>
          { goals.map(goal => <li key={goal}>{goal}</li>)}
        </ul>
      </div>
    </div>
  ) : null;
};

EntityGoals.propTypes = {
  params: PropTypes.shape({
    jurisdiction: PropTypes.string,
    entity: PropTypes.string,
    program: PropTypes.string,
    activity: PropTypes.string,
    year: PropTypes.number,
    budget: PropTypes.string,
    inflation: PropTypes.string,
  }),
}

module.exports = EntityGoals;
