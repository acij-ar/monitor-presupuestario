const React = require('react');
const MonitorForm = require('../../../../components/monitor/compare-form');
const InflationDisclaimer = require('../../../../components/inflation-disclaimer');
const ReasignationDisclaimer = require('../../../../components/reasignation-disclaimer');
const EntitiesColumns = require('./components/entities-columns');
const EntitiesTimeseriesArea = require('./components/entities-timeseries-area');

const { useState } = React;

const MonitorExplorer = () => {
  const [params, setParams] = useState({});

  return (
    <div id="monitor-comparator">
      <MonitorForm setParams={setParams} type="comparator" />
      <EntitiesColumns params={params} />
      <EntitiesTimeseriesArea params={params} />
      <InflationDisclaimer params={params} />
      <ReasignationDisclaimer params={params} />
    </div>
  );
};

module.exports = MonitorExplorer;
