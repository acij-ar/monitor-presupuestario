const _ = require('lodash');

module.exports = ({ results, table }) => {
    const processedResults = {};
    results.map(({name, year, id}) => {
        if (!processedResults[name]) {
            processedResults[name] = {
                table,
                name,
                variants: [],
                value: `${table}-${name}`,
            };
        }
        if (year && id) {
            processedResults[name].variants.push({year, id})
        }
    });
    Object.keys(processedResults).map(name => {
        const years = processedResults[name].variants.map(({year}) => year);
        const minYear = _.min(years);
        const maxYear = _.max(years);
        const yearsDescription = minYear === maxYear ? `${minYear}` : `${minYear} - ${maxYear}`;
        processedResults[name].label = `${name} (${yearsDescription})`;
    });
    return Object.values(processedResults);
};
