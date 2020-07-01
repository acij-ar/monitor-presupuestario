const React = require('react');
const MonitorForm = require('../../../../components/monitor/form');
const EntitySunburst = require('./components/entity-sunburst');
const EntityDetail = require('./components/entity-detail');
const EntityHierarchy = require('./components/entity-hierarchy');
const EntityTable = require('./components/entity-table');
const EntityTimeseries = require('./components/entity-timeseries');
const EntityGoals = require('./components/entity-goals');

const { useState } = React;

const MonitorExplorer = () => {
  const [params, setParams] = useState({});

  return (
    <div id="monitor-explorer">
      <MonitorForm setParams={setParams} />
      <div className="monitor-explorer-chart-row">
        <div>
          <EntityDetail params={params} />
          <EntityGoals params={params} />
        </div>
        <EntitySunburst params={params} />
      </div>
      <div className="monitor-explorer-chart-row">
        <EntityHierarchy params={params} />
        <EntityTable params={params} />
      </div>
      <EntityTimeseries params={params} />
    </div>
  );
};

module.exports = MonitorExplorer;
