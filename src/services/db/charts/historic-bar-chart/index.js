const query = require('./query');
const highchartsConfig = require('./highcharts-config');

module.exports = ({selectedYears, selectedBudgets, selectedEntities}) => {
  const queryResults = query({selectedYears, selectedBudgets, selectedEntities});
  return highchartsConfig(queryResults);
};
