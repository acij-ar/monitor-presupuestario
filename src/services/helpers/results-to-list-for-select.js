const _ = require('lodash');

const updateLabelsWithYearsAndTableName = ({results}) => {
    Object.keys(results).map(name => {
        const {years, entityType} = results[name];
        const minYear = _.min(years);
        const maxYear = _.max(years);
        const yearsDescription = minYear === maxYear ? `${minYear}` : `${minYear} - ${maxYear}`;
        results[name].label = `${name} (${entityType} ${yearsDescription})`;
    });
};

const groupResultsByNameAndTable = ({results}) => {
    const groupedResults = {};
    results.map(({name, year, id, entity_type: entityType}) => {
        if (!groupedResults[name]) {
            groupedResults[name] = {name, id, entityType, years: []};
        }
        groupedResults[name].years.push(year)
    });
    return groupedResults;
};

module.exports = ({results}) => {
    const groupedResults = groupResultsByNameAndTable({results});
    updateLabelsWithYearsAndTableName({results: groupedResults});
    return Object.values(groupedResults);
};
