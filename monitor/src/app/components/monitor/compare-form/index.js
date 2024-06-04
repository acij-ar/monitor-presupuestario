const React = require('react');
const PropTypes = require('prop-types');
const axios = require('axios');
const { DragDropContext } = require('react-beautiful-dnd');
const Groups = require('./groups');
const Selectors = require('./selectors');
const getDefaultSelected = require('./helpers/get-default-selected');
const extractItem = require('./helpers/extract-item');
const insertItem = require('./helpers/insert-item');
const updateParams = require('./helpers/update-params');
const filterEntitiesForSelectedYears = require('./helpers/filter-entities-for-selected-years');
const EntitiesSelectors = require('../../entities-selectors');
const includes = require('lodash/includes');

const { useEffect, useState } = React;

const CompareForm = ({ setParams }) => {
  const [options, setOptions] = useState({});
  const [selected, setSelected] = useState({});
  const [groups, setGroups] = useState([[], []]);
  const [rawData, setData] = useState({});

  const fetchData = async () => {
    const { data } = await axios.get('/api/data/options/compare');
    setData(data);
    const defaultSelected = getDefaultSelected(data);
    setOptions(filterEntitiesForSelectedYears(data, defaultSelected));
    setSelected(defaultSelected);
    updateParams(setParams, defaultSelected, groups)
  };
  useEffect(() => { fetchData() }, []);

  const updateSelectedOption = (newSelectedOption) => {
    const newSelectedOptions = { ...selected, ...newSelectedOption };
    setSelected(newSelectedOptions);
    setOptions(filterEntitiesForSelectedYears(rawData, newSelectedOptions));
    updateParams(setParams, newSelectedOptions, groups);
  }

  const onDragEnd = ({ source, destination }) => {
    if (!destination) return;
    const item = extractItem(groups, options, source);
    item.source = item.source || source;
    insertItem(item, destination, options, groups);
    setOptions({ ...options });
    setGroups([ ...groups ]);
    updateParams(setParams, selected, groups);
  }

  const onRemoveItem = ({ groupId, index }) => {
    if (groupId === "compare-group-0") {
      groups[0].splice(index, 1);
    } else {
      groups[1].splice(index, 1);
    }
    setGroups(groups);
    updateParams(setParams, selected, groups);
  }

  const resetSelection = () => {
    const emptyGroups = [[], []];
    setGroups(emptyGroups);
    updateParams(setParams, selected, emptyGroups);
  }

  const onItemSelected = (item) => {
    if (includes(groups[0], item) || includes(groups[1], item)) return;
    groups[0].push(item);
    setGroups([ ...groups ]);
    updateParams(setParams, selected, groups);
  }

  return (
    <div id="monitor-compare-form">
      <DragDropContext onDragEnd={onDragEnd}>
        <EntitiesSelectors options={options.entities} updateSelectedEntity={onItemSelected} />
        <div id="compare-group-and-selectors">
          <Groups groups={groups} onRemoveItem={onRemoveItem} />
          <Selectors
            options={options}
            selected={selected}
            updateSelected={updateSelectedOption}
            resetSelection={resetSelection}
            groups={groups}
          />
        </div>
      </DragDropContext>
    </div>
  );
};

CompareForm.propTypes = {
  setParams: PropTypes.func.isRequired,
};

module.exports = CompareForm;
