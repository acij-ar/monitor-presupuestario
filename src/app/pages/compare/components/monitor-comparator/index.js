const React = require('react');
const MonitorForm = require('../../../../components/monitor/compare-form');
const InflationDisclaimer = require('../../../../components/inflation-disclaimer');
const EntitiesTimeseriesArea = require('./components/entities-timeseries-area');

const { useState } = React;

const MonitorExplorer = () => {
  const [params, setParams] = useState({});

  return (
    <div id="monitor-comparator">
      <MonitorForm setParams={setParams} type="comparator" />
      <EntitiesTimeseriesArea params={params} />
      <InflationDisclaimer params={params} />
    </div>
  );
};

module.exports = MonitorExplorer;
