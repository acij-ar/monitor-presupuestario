const React = require('react');
const PropTypes = require('prop-types');
const { Droppable, Draggable } = require('react-beautiful-dnd');

const DndList = ({ items, id, isDropDisabled, direction, className }) => (
  <Droppable droppableId={id} direction={direction} isDropDisabled={isDropDisabled}>
    {(provided, {isDraggingOver}) => (
      <div
        className={isDraggingOver ? `${className} ${className}-dragging-over` : className}
        ref={provided.innerRef}
        {...provided.droppableProps}
      >
        {items.map((item, index) => (
          <Draggable
            key={item.name}
            draggableId={`${id}-${item.name}`}
            index={index}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={`${className}-item ${snapshot.isDragging ? `${className}-item-dragging` : ''}`}
                style={provided.draggableProps.style}>
                {item.name}
              </div>
            )}
          </Draggable>
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
}

DndList.defaultProps = {
  items: [],
  isDropDisabled: false,
}

module.exports = DndList;
