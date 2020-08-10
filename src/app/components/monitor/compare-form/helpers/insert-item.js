const sortBy = require('lodash/sortBy');

module.exports = (item, destination, options, groups) => {
  if (destination.droppableId.startsWith('compare-group')) {
    const groupIndex = destination.droppableId === 'compare-group-0' ? 0 : 1;
    groups[groupIndex].push(item);
  } else {
    options.entities[destination.droppableId].push(item);
    options.entities[destination.droppableId] = sortBy(options.entities[destination.droppableId], 'name')
  }
};
