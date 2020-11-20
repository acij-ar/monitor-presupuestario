const React = require('react');
const PropTypes = require('prop-types');
const { Droppable } = require('react-beautiful-dnd');
const Item = require('./item');

const DndList = ({ items, id, isDropDisabled, direction, className, cloaseable, onRemoveItem }) => (
  <Droppable droppableId={id} direction={direction} isDropDisabled={isDropDisabled} mode="virtual">
    {(provided, {isDraggingOver}) => (
      <div
        className={isDraggingOver ? `${className} ${className}-dragging-over` : className}
        ref={provided.innerRef}
        {...provided.droppableProps}
      >
        {items.map((item, index) => (
          <Item
            key={item.label}
            item={item}
            index={index}
            id={id}
            className={className}
            onRemoveItem={onRemoveItem}
            closeable={cloaseable}
          />
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
)

DndList.propTypes = {
  items: PropTypes.array,
  id: PropTypes.string.isRequired,
  isDropDisabled: PropTypes.bool,
  direction: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  cloaseable: PropTypes.bool,
  onRemoveItem: PropTypes.func,
}

DndList.defaultProps = {
  items: [],
  isDropDisabled: false,
  cloaseable: false,
}

module.exports = DndList;
