const query = require('./query');
const highchartsConfig = require('./highcharts-config');

module.exports = async ({selectedYears, selectedBudgets, selectedEntities}) => {
    return highchartsConfig()
};

