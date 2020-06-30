const React = require('react');
const ExploreForm = require('./components/explore-form');
const EntitySunburst = require('./components/entity-sunburst');
const EntityDetail = require('./components/entity-detail');
const EntityHierarchy = require('./components/entity-hierarchy');
const EntityTable = require('./components/entity-table');
const EntityTimeseries = require('./components/entity-timeseries');
const EntityGoals = require('./components/entity-goals');
const axios = require('axios');
const getDefaultSelected = require('./get-default-selected');
const transformOptions = require('./helpers/transform-options');

const { useEffect, useState } = React;

const MonitorExplorer = () => {
  const [rawOptions, setRawOptions] = useState({});
  const [options, setOptions] = useState({});
  const [selected, setSelected] = useState({});
  const [params, setParams] = useState({});
  const updateSelected = newValues => {
    setSelected({ ...selected, ...newValues });
    setParams({ ...selected, ...newValues });
  };

  const fetchData = async () => {
    const { data } = await axios.get('/api/data/options');
    setRawOptions(data);
    setOptions(transformOptions(data, null).options);
    const defaultSelected = getDefaultSelected(data);
    setSelected(defaultSelected);
    setParams(defaultSelected);
  };
  useEffect(() => { fetchData() }, []);

  const updateSelectedEntity = (newId) => {
    const { options, selectedIds, selectedNames } = transformOptions(rawOptions, newId);
    setOptions(options);
    setSelected({...selected, ...selectedIds});
    setParams({...selected, ...selectedNames});
  };

  return (
    <div id="monitor-explorer">
      <ExploreForm options={options} updateSelectedOption={updateSelected} updateSelectedEntity={updateSelectedEntity} selected={selected} />
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
