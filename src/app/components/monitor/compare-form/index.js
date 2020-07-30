const React = require('react');
const PropTypes = require('prop-types');
const axios = require('axios');
const { DragDropContext } = require('react-beautiful-dnd');
const Lists = require('./lists');
const Groups = require('./groups');
const Selectors = require('./selectors');
const getDefaultSelected = require('./helpers/get-default-selected');

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
    setParams(defaultSelected);
  };
  useEffect(() => { fetchData() }, []);

  const updateSelectedOption = (newSelectedOption) => {
    setSelected({ ...selected, ...newSelectedOption });
  }

  const extractItemFrom = ({ droppableId, index }) => {
    let removed;
    if (droppableId.startsWith('compare-group')) {
      const groupIndex = droppableId === 'compare-group-0' ? 0 : 1;
      [removed] = groups[groupIndex].splice(index, 1);
    } else {
      [removed] = options.entities[droppableId].splice(index, 1);
      setOptions(options);
    }
    return removed;
  }

  const insertItem = (item, destination) => {
    const groupIndex = destination.droppableId === 'compare-group-0' ? 0 : 1;
    groups[groupIndex].push(item);
    setGroups(groups);
  }

  const onDragEnd = ({ source, destination }) => {
    if (!destination) return;
    const item = extractItemFrom(source);
    insertItem(item, destination);
  }

  return (
    <div id="monitor-compare-form">
      <DragDropContext onDragEnd={onDragEnd}>
        <Lists options={options} selected={selected} />
        <div id="compare-group-and-selectors">
          <Groups groups={groups} />
          <Selectors options={options} selected={selected} updateSelected={updateSelectedOption} />
        </div>
      </DragDropContext>
    </div>
  );
};

CompareForm.propTypes = {
  setParams: PropTypes.func.isRequired,
};

module.exports = CompareForm;
