const sortBy = require('lodash/sortBy');
const range = require('lodash/range');

module.exports = (rows) => {
  const years = {};
  rows.forEach((groupRows, index) => groupRows.forEach(({ budget, ejercicio_presupuestario }) => {
    if (!years[ejercicio_presupuestario]) {
      years[ejercicio_presupuestario] = [0, 0]
    }
    years[ejercicio_presupuestario][index] += budget;
  }))
  const yearsInResults = sortBy(Object.keys(years));
  const categories = range(Math.min(...yearsInResults), Math.max(...yearsInResults) +1).map(year => year.toString());
  const data = [[], []];
  categories.forEach(year => {
    data[0].push(years[year] ? years[year][0] : 0);
    data[1].push(years[year] ? years[year][1] : 0);
  });
  return { categories, data };
}
