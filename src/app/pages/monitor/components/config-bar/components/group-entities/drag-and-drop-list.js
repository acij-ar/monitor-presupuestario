const React = require('react');
const { Droppable, Draggable } = require('react-beautiful-dnd');
const { getItemStyle, getListStyle } = require('./drag-styles');

class DragAndDropList extends React.PureComponent {
  render() {
    const { id, items, type } = this.props;
    return (
      <Droppable droppableId={id}>
        {(provided, {isDraggingOver}) => (
          <div
            ref={provided.innerRef}
            style={getListStyle({ isDraggingOver, type })}>
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
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}>
                    {item.label}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    )
  }
}

module.exports = DragAndDropList;
