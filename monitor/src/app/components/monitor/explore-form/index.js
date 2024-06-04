const React = require('react');
const PropTypes = require('prop-types');
const Selectors = require('./selectors');
const axios = require('axios');
const getDefaultSelected = require('./helpers/get-default-selected');
const transformOptions = require('./helpers/transform-options');
const filterEntitiesByYear = require('./helpers/filter-entities-year');

const { useEffect, useState } = React;

const ExploreForm = ({ params, setParams }) => {
  const [rawOptions, setRawOptions] = useState({});
  const [options, setOptions] = useState({});
  const [selected, setSelected] = useState({});
  const updateSelected = newValues => {
    const { newSelected, newParams, newOptions } = filterEntitiesByYear({ rawOptions, options, selected, params, newValues });
    setSelected(newSelected);
    setParams(newParams);
    if (newOptions) {
      setOptions(newOptions);
    }
  };

  const fetchData = async () => {
    const { data } = await axios.get('/api/data/options/explore');
    setRawOptions(data);
    const defaultSelected = getDefaultSelected(data);
    const { options } = transformOptions({ rawOptions: data, year: defaultSelected.year });
    setOptions(options);
    setSelected(defaultSelected);
    setParams(defaultSelected);
  };
  useEffect(() => { fetchData() }, []);

  const updateSelectedEntity = (newId) => {
    const { options, selectedIds, selectedNames } = transformOptions({ rawOptions, newId, year: selected.year });
    setOptions(options);
    setSelected({...selected, ...selectedIds});
    setParams({...selected, ...selectedNames});
  };

  return (
    <Selectors
      options={options}
      updateSelectedOption={updateSelected}
      updateSelectedEntity={updateSelectedEntity}
      selected={selected}
    />
  );
};

ExploreForm.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

module.exports = ExploreForm;
