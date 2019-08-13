const query = require('./query');
const highchartsConfig = require('./highcharts-config');

module.exports = async ({selectedYears, selectedBudgets, selectedEntities}) => {
    const { years, series } = await query({selectedYears, selectedBudgets, selectedEntities});
    return highchartsConfig({ years, series })
};
