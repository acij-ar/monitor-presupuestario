const React = require('react');
const PropTypes = require('prop-types');
const { Draggable } = require('react-beautiful-dnd');

const Item = ({ id, item, index, className, closeable, onRemoveItem }) => {
  const name = item.actividad_desc || item.programa_desc || item.entidad_desc || item.jurisdiccion_desc;
  return (
    <Draggable
      key={name}
      draggableId={`${id}-${name}`}
      index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`${className}-item ${snapshot.isDragging ? `${className}-item-dragging` : ''}`}
          style={provided.draggableProps.style}>
          {name}
          { closeable && (
            <svg height="14" width="14" viewBox="0 0 20 20" aria-hidden="true" focusable="false" onClick={() => onRemoveItem({ destination: item.source.droppableId, droppableId: id, index })}>
              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" />
            </svg>
          )}
        </div>
      )}
    </Draggable>
  )
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  closeable: PropTypes.bool.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    actividad_desc: PropTypes.string,
    programa_desc: PropTypes.string,
    entidad_desc: PropTypes.string,
    jurisdiccion_desc: PropTypes.string,
    source: PropTypes.shape({
      droppableId: PropTypes.string,
    })
  }).isRequired,
}

module.exports = Item;
