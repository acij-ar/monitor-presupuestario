const sortBy = require('lodash/sortBy');
const range = require('lodash/range');

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
  groupRows.forEach((groupRows, index) => {
    groupRows.forEach(entityRows => {
      if (entityRows.length) {
        const data = entityRows.map(row => ({ y: row.budget, color: getColorForRow(row) }));
        const item = entityRows[0];
        const name = item.actividad_desc || item.programa_desc || item.entidad_desc || item.jurisdiccion_desc
        series.push({ data, stack: `group-${index}`, name })
      }
    });
  });
  return { categories, series };
}
