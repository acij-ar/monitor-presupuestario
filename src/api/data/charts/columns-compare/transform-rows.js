const sortBy = require('lodash/sortBy');
const range = require('lodash/range');

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
      const data = entityRows.map(row => ({ y: row.budget, color: '#e600c8' }));
      const item = entityRows[0];
      const name = item.actividad_desc || item.programa_desc || item.entidad_desc || item.jurisdiccion_desc
      series.push({ data, stack: `group-${index}`, name, color: '#e600c8' })
    });
  });
  return { categories, series };
}
