const sortBy = require('lodash/sortBy');

module.exports = (rows) => {
  const years = {};
  rows.forEach((groupRows, index) => groupRows.forEach(({ budget, ejercicio_presupuestario }) => {
    if (!years[ejercicio_presupuestario]) {
      years[ejercicio_presupuestario] = [0, 0]
    }
    years[ejercicio_presupuestario][index] += budget;
  }))
  const categories = sortBy(Object.keys(years));
  const data = [[], []];
  categories.forEach(year => {
    data[0].push(years[year][0])
    data[1].push(years[year][1])
  });
  return { categories, data };
}
