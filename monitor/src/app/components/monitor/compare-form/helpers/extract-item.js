module.exports = (groups, options, { droppableId, index }) => {
  let removed;
  if (droppableId.startsWith('compare-group')) {
    const groupIndex = droppableId === 'compare-group-0' ? 0 : 1;
    [removed] = groups[groupIndex].splice(index, 1);
  } else {
    [removed] = options.entities[droppableId].splice(index, 1);
  }
  return removed;
}
