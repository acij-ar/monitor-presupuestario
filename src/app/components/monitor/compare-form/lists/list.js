const React = require('react');
const PropTypes = require('prop-types');
const DragList = require('../dnd-list');

const List = ({ id, name, items }) => {
  return (
    <div id={`list-${id}`} className="compare-drag-list-container" >
      <div className="compare-drag-list-title">{ name }</div>
      <DragList items={items} id={id} isDropDisabled={true} direction="vertical" className="compare-drag-list" />
    </div>
  );
}

List.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.array,
}

module.exports = List;
