const React = require('react');
const MonitorForm = require('../../../../components/monitor/form');
const InflationDisclaimer = require('../../../../components/monitor/inflation-disclaimer');
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
      <MonitorForm params={params} setParams={setParams} />
      <div className="monitor-explorer-chart-row">
        <div>
          <EntityDetail params={params} />
          <EntityGoals params={params} />
        </div>
        <EntitySunburst params={params} />
      </div>
      <EntityHierarchy params={params} />
      <EntityTable params={params} />
      <EntityTimeseries params={params} />
      <InflationDisclaimer params={params} />
    </div>
  );
};

module.exports = MonitorExplorer;
