const query = require('./query');
const highchartsConfig = require('./highcharts-config');

module.exports = ({selectedYears, selectedBudgets, selectedEntities}) => {
    const { years, series } = query({selectedYears, selectedBudgets, selectedEntities});
    return highchartsConfig({ years, series })
};
