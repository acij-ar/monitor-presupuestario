const React = require('react');
const EntityForm = require('./components/entity-form');
const EntitySunburst = require('./components/entity-sunburst');
const EntityDetail = require('./components/entity-detail');
const EntityHierarchy = require('./components/entity-hierarchy');
const EntityTable = require('./components/entity-table');
const EntityTimeseries = require('./components/entity-timeseries');

const MonitorExplorer = () => (
  <div id="monitor-explorer">
    <EntityForm />
    <div className="monitor-explorer-chart-row">
      <EntityDetail />
      <EntitySunburst />
    </div>
    <div className="monitor-explorer-chart-row">
      <EntityHierarchy />
      <EntityTable />
    </div>
    <EntityTimeseries />
  </div>
);

module.exports = MonitorExplorer;
