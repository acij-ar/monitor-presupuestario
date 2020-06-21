const React = require('react');
const ExploreForm = require('./components/explore-form');
const EntitySunburst = require('./components/entity-sunburst');
const EntityDetail = require('./components/entity-detail');
const EntityHierarchy = require('./components/entity-hierarchy');
const EntityTable = require('./components/entity-table');
const EntityTimeseries = require('./components/entity-timeseries');
const axios = require('axios');

const { useEffect, useState } = React;

const MonitorExplorer = () => {
  const [options, setOptions] = useState({});
  const fetchData = async () => {
    const { data } = await axios.get('/api/data/options');
    setOptions(data);
  };
  useEffect(() => { fetchData() }, []);

  const [selected, setSelected] = useState({});
  const updateSelected = newValues => setSelected({ ...selected, ...newValues });

  return (
    <div id="monitor-explorer">
      <ExploreForm options={options} updateSelected={updateSelected} selected={selected} />
      <div className="monitor-explorer-chart-row">
        <EntityDetail selected={selected} />
        <EntitySunburst selected={selected} />
      </div>
      <div className="monitor-explorer-chart-row">
        <EntityHierarchy />
        <EntityTable />
      </div>
      <EntityTimeseries />
    </div>
  );
};

module.exports = MonitorExplorer;
