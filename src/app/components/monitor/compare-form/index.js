const React = require('react');
const PropTypes = require('prop-types');
const axios = require('axios');
const { DragDropContext } = require('react-beautiful-dnd');
const Lists = require('./lists');
const Groups = require('./groups');
const Selectors = require('./selectors');
const getDefaultSelected = require('./helpers/get-default-selected');
const extractItem = require('./helpers/extract-item');
const insertItem = require('./helpers/insert-item');
const updateParams = require('./helpers/update-params');

const { useEffect, useState } = React;

const CompareForm = ({ setParams }) => {
  const [options, setOptions] = useState({});
  const [selected, setSelected] = useState({});
  const [groups, setGroups] = useState([[], []]);

  const fetchData = async () => {
    const { data } = await axios.get('/api/data/options/compare');
    setOptions(data);
    const defaultSelected = getDefaultSelected(data);
    setSelected(defaultSelected);
    updateParams(setParams, defaultSelected, groups)
  };
  useEffect(() => { fetchData() }, []);

  const updateSelectedOption = (newSelectedOption) => {
    const newSelectedOptions = { ...selected, ...newSelectedOption };
    setSelected(newSelectedOptions);
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

  const onRemoveItem = ({ destination, droppableId, index }) => {
    onDragEnd({ source: { droppableId, index }, destination: { droppableId: destination } })
  }

  const resetSelection = () => {
    [...groups[0], ...groups[1]].map(item => insertItem(item, item.source, options, groups))
    setOptions({ ...options });
    const emptyGroups = [[], []];
    setGroups(emptyGroups);
    updateParams(setParams, selected, emptyGroups);
  }

  return (
    <div id="monitor-compare-form">
      <DragDropContext onDragEnd={onDragEnd}>
        <Lists options={options} />
        <div id="compare-group-and-selectors">
          <Groups groups={groups} onRemoveItem={onRemoveItem} />
          <Selectors
            options={options}
            selected={selected}
            updateSelected={updateSelectedOption}
            resetSelection={resetSelection}
            groups={groups}
          />
        </div>9
      </DragDropContext>
    </div>
  );
};

CompareForm.propTypes = {
  setParams: PropTypes.func.isRequired,
};

module.exports = CompareForm;
