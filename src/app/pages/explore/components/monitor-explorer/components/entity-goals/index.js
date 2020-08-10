const React = require('react');
const PropTypes = require('prop-types');
const DataClient = require('../../../../../../components/data-client');

const { useEffect, useState } = React;
const dataClient = new DataClient({ url: '/api/data/goals' });

const EntityGoals = ({ params }) => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    if (params && params.program && !params.activity) {
      dataClient.get(params, setGoals)
    } else {
      setGoals(null);
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
