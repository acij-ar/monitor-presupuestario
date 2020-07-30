const React = require('react');
const PropTypes = require('prop-types');
const axios = require('axios');
const { DragDropContext } = require('react-beautiful-dnd');
const Lists = require('./lists');
const Groups = require('./groups');
const Selectors = require('./selectors');
const getDefaultSelected = require('./helpers/get-default-selected');
const onDragEnd = require('./helpers/on-drag-end');

const { useEffect, useState } = React;

const CompareForm = ({ params, setParams }) => {
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

  return (
    <div id="monitor-compare-form">
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          <Selectors options={options} selected={selected} updateSelected={updateSelectedOption} />
        </div>
      </DragDropContext>
    </div>
  );
};

CompareForm.propTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

module.exports = CompareForm;
