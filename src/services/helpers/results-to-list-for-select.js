const _ = require('lodash');

const updateLabelsWithYearsAndTableName = ({results, table}) => {
    Object.keys(results).map(name => {
        const years = results[name].variants.map(({year}) => year);
        const minYear = _.min(years);
        const maxYear = _.max(years);
        const yearsDescription = minYear === maxYear ? `${minYear}` : `${minYear} - ${maxYear}`;
        results[name].label = `${name} (${table.singularName} ${yearsDescription})`;
    });
};

const groupResultsByNameAndTable = ({results, table}) => {
    const groupedResults = {};
    results.map(({name, year, id}) => {
        if (!groupedResults[name]) {
            groupedResults[name] = {
                table: table.name,
                name,
                variants: [],
                value: `${table.name}-${name}`,
            };
        }
        if (year && id) {
            groupedResults[name].variants.push({year, id})
        }
    });
    return groupedResults;
};

module.exports = ({results, table}) => {
    const groupedResults = groupResultsByNameAndTable({results, table});
    updateLabelsWithYearsAndTableName({results: groupedResults, table});
    return Object.values(groupedResults);
};
