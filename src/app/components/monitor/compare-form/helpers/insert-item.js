const sortBy = require('lodash/sortBy');

const sortHelper = item => item.actividad_desc || item.programa_desc || item.entidad_desc || item.jurisdiccion_desc;

module.exports = (item, destination, options, groups) => {
  if (destination.droppableId.startsWith('compare-group')) {
    const groupIndex = destination.droppableId === 'compare-group-0' ? 0 : 1;
    groups[groupIndex].push(item);
  } else {
    options.entities[destination.droppableId].push(item);
    options.entities[destination.droppableId] = sortBy(options.entities[destination.droppableId], sortHelper)
  }
};
