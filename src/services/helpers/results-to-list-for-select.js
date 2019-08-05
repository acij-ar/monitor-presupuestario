const _ = require('lodash');

module.exports = ({ results, table }) => {
    const processedResults = {};
    results.map(({name, year, id}) => {
        if (!processedResults[name]) {
            processedResults[name] = {
                table,
                label: name,
                asciiName: _.deburr(name),
                variants: [],
                value: `${table}-${name}`,
            };
        }
        if (year && id) {
            processedResults[name].variants.push({year, id})
        }
    });
    return Object.values(processedResults);
};
