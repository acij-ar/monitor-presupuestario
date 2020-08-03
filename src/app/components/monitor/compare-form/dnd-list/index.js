const React = require('react');
const PropTypes = require('prop-types');
const { Droppable, Draggable } = require('react-beautiful-dnd');

const DndList = ({ items, id, isDropDisabled, direction, className, cloaseable, onRemoveItem }) => (
  <Droppable droppableId={id} direction={direction} isDropDisabled={isDropDisabled} mode="virtual">
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
                { cloaseable && (
                  <svg height="14" width="14" viewBox="0 0 20 20" aria-hidden="true" focusable="false" onClick={() => onRemoveItem({ destination: item.source.droppableId, droppableId: id, index })}>
                    <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" />
                  </svg>
                )}
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
  cloaseable: PropTypes.bool,
  onRemoveItem: PropTypes.func,
}

DndList.defaultProps = {
  items: [],
  isDropDisabled: false,
  cloaseable: false,
}

module.exports = DndList;
