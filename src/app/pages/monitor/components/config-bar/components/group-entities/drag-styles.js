const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = ({ isDraggingOver, type }) => ({
  border: `solid 2px ${isDraggingOver ? '#aaa' : '#ddd'}`,
  padding: '10px',
});

module.exports = {
  getItemStyle,
  getListStyle,
};
