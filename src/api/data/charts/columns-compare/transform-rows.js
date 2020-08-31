const sortBy = require('lodash/sortBy');
const range = require('lodash/range');
const patterns = require('./patterns');

const getColorForRow = (row) =>
  row.actividad_desc ? '#BB73FF' :
    row.programa_desc ? '#8200FF' :
      row.entidad_desc ? '#FF00E1' :
        '#00B0AE';

module.exports = (groupRows) => {
  const yearsInResults = [];
  groupRows.forEach((groupRows) => {
    groupRows.forEach(entityRows => {
      entityRows.forEach(({ ejercicio_presupuestario }) => {
        if (!yearsInResults.includes(ejercicio_presupuestario)) {
          yearsInResults.push(ejercicio_presupuestario);
        }
      })
    });
  });
  const years = range(Math.min(...yearsInResults), Math.max(...yearsInResults) +1);
  const categories = sortBy(years).map(year => year.toString());

  const series = [];
  const patternNumbers = {};
  groupRows.forEach((groupRows, index) => {
    groupRows.forEach(entityRows => {
      if (entityRows.length) {
        const item = entityRows[0];
        const color = getColorForRow(item);
        const patternNumber = patternNumbers[color] || 0;
        patternNumbers[color] = patternNumber + 1;
        const colorOrPattern = patterns(patternNumber, color);
        const entityData = {};
        entityRows.map(row => { entityData[row.ejercicio_presupuestario] = row.budget });
        const data = years.map(year => ({ y: entityData[year] || 0, color: colorOrPattern }))
        const name = item.actividad_desc || item.programa_desc || item.entidad_desc || item.jurisdiccion_desc
        series.push({ data, stack: `group-${index}`, name, color: colorOrPattern })
      }
    });
  });
  return { categories, series };
}
