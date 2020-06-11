const React = require('react');
const Selector = require('./components/selector');
const EntitySelector = require('./components/entity-sunburst');
const EntityDetail = require('./components/entity-detail');
const EntityHierarchy = require('./components/entity-hierarchy');
const EntityTable = require('./components/entity-table');
const EntityTimeseries = require('./components/entity-timeseries');

const MonitorExplorer = () => (
  <div id="monitor-explorer">
    <Selector />
    <div className="monitor-explorer-chart-row">
      <EntityDetail />
      <EntitySelector />
    </div>
    <div className="monitor-explorer-chart-row">
      <EntityHierarchy />
      <EntityTable />
    </div>
    <EntityTimeseries />
  </div>
);

module.exports = MonitorExplorer;
