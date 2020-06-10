// TODO: probably this folder should die after data management refactor

const _ = require('lodash');

const updateLabelsWithYearsAndTableName = ({results}) => {
  Object.keys(results).map(id => {
    const {years, entityType, name} = results[id];
    const minYear = _.min(years);
    const maxYear = _.max(years);
    const yearsDescription = minYear === maxYear ? `${minYear}` : `${minYear} - ${maxYear}`;
    results[id].label = `${name} (${entityType} ${yearsDescription})`;
    delete results[id].years;
    delete results[id].entityType;
  });
};

const groupResultsByNameAndTable = ({results}) => {
  const groupedResults = {};
  results.map(({name, year, id, entity_type: entityType}) => {
    if (!groupedResults[id]) {
      groupedResults[id] = {name, id, entityType, years: [], value: name};
    }
    groupedResults[id].years.push(year);
  });
  return groupedResults;
};

module.exports = ({results}) => {
  const groupedResults = groupResultsByNameAndTable({results});
  updateLabelsWithYearsAndTableName({results: groupedResults});
  return Object.values(groupedResults);
};
