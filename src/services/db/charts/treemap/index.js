const query = require('./query');
const highchartsConfig = require('./highcharts-config');

module.exports = async ({selectedYear, selectedBudget, selectedEntity}) => {
    const {name, data} = await query({selectedYear, selectedBudget, selectedEntity});
    return highchartsConfig({name, data})
};

