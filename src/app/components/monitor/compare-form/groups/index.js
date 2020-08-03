const React = require('react');
const PropTypes = require('prop-types');
const DragList = require('../dnd-list');

const Groups = ({ groups, onRemoveItem }) => {
  const className = 'compare-group-list';
  return (
    <div id={`${className}-container`}>
      <div className={`${className}-container`}>
        <div className={`${className}-title`}>Grupo 1</div>
        <DragList items={groups[0]} id="compare-group-0" isDropDisabled={false} direction="vertical" className={className} cloaseable onRemoveItem={onRemoveItem} />
      </div>
      <div className={`${className}-container`}>
        <div className={`${className}-title`}>Grupo 2</div>
        <DragList items={groups[1]} id="compare-group-1" isDropDisabled={false} direction="vertical" className={className} cloaseable onRemoveItem={onRemoveItem} />
      </div>
    </div>
  );
}

Groups.propTypes = {
  groups: PropTypes.array,
  onRemoveItem: PropTypes.func.isRequired,
}

Groups.defaultProps = {
  groups: [],
}

module.exports = Groups;
