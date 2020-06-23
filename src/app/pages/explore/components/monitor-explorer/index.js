const React = require('react');
const ExploreForm = require('./components/explore-form');
const EntitySunburst = require('./components/entity-sunburst');
const EntityDetail = require('./components/entity-detail');
const EntityHierarchy = require('./components/entity-hierarchy');
const EntityTable = require('./components/entity-table');
const EntityTimeseries = require('./components/entity-timeseries');
const axios = require('axios');
const getDefaultSelected = require('./get-default-selected');

const { useEffect, useState } = React;

const MonitorExplorer = () => {
  const [options, setOptions] = useState({});
  const [selected, setSelected] = useState({});
  const updateSelected = newValues => setSelected({ ...selected, ...newValues });

  const fetchData = async () => {
    const { data } = await axios.get('/api/data/options');
    setOptions(data);
    const defaultSelected = getDefaultSelected(data);
    setSelected(defaultSelected);
  };
  useEffect(() => { fetchData() }, []);

  return (
    <div id="monitor-explorer">
      <ExploreForm options={options} updateSelected={updateSelected} selected={selected} />
      <div className="monitor-explorer-chart-row">
        <EntityDetail params={selected} />
        <EntitySunburst params={selected} />
      </div>
      <div className="monitor-explorer-chart-row">
        <EntityHierarchy params={selected} />
        <EntityTable params={selected} />
      </div>
      <EntityTimeseries params={selected} />
    </div>
  );
};

module.exports = MonitorExplorer;
