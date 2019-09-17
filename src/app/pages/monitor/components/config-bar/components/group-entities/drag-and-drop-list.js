const React = require('react');
const { Droppable, Draggable } = require('react-beautiful-dnd');

class DragAndDropList extends React.PureComponent {
  render() {
    const { id, items, className, direction, onUnify } = this.props;
    return (
      <Droppable droppableId={id} direction={direction}>
        {(provided, {isDraggingOver}) => (
          <div
            className={`${className} ${isDraggingOver ? `${className}-dragging-over` : ''}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <div>
              {items.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`monitor-config-group-item ${snapshot.isDragging ? 'monitor-config-group-item-dragging' : ''}`}
                      style={provided.draggableProps.style}>
                      {item.label}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
            { onUnify && (
              <label className={`${className}-unification-checkbox`}>
                Unificar
                <input type="checkbox" onChange={onUnify} />
              </label>
            ) }
          </div>
        )}
      </Droppable>
    )
  }
}

module.exports = DragAndDropList;
