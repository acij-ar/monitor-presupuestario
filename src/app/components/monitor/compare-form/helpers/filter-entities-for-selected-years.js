const intersection = require('lodash/intersection');

const filterForYears = (entities, years) => {
  const yearsValues = years.map(year => year.value);
  return entities.filter(entity => intersection(yearsValues, entity.years).length > 0)
}

module.exports = (options, selected) => {
  const { budgets, inflation, years, entities: { jurisdictions, entities, programs, activities } } = options;
  const { years: selectedYears } = selected;
  return {
    budgets,
    inflation,
    years,
    entities: {
      jurisdictions: filterForYears(jurisdictions, selectedYears),
      entities: filterForYears(entities, selectedYears),
      programs: filterForYears(programs, selectedYears),
      activities: filterForYears(activities, selectedYears),
    },
  };
}
