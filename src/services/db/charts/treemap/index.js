const query = require('./query');
const highchartsConfig = require('./highcharts-config');

module.exports = ({selectedYear, selectedBudget, selectedEntity}) => {
    const {name, data, color, titleSuffix} = query({selectedYear, selectedBudget, selectedEntity});
    return highchartsConfig({name, data, color, titleSuffix})
};

