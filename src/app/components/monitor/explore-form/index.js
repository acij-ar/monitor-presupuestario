const React = require('react');
const PropTypes = require('prop-types');
const Selectors = require('./selectors');
const axios = require('axios');
const getDefaultSelected = require('./helpers/get-default-selected');
const transformOptions = require('./helpers/transform-options');

const { useEffect, useState } = React;

const ExploreForm = ({ params, setParams }) => {
  const [rawOptions, setRawOptions] = useState({});
  const [options, setOptions] = useState({});
  const [selected, setSelected] = useState({});
  const updateSelected = newValues => {
    setSelected({ ...selected, ...newValues });
    setParams({ ...params, ...newValues });
  };

  const fetchData = async () => {
    const { data } = await axios.get('/api/data/options/explore');
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
