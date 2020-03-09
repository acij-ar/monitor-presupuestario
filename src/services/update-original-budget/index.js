const fs = require('fs');
const {datasets: { files }} = require('../../config');
const updateOriginalBudgetForYear = require('./update-original-budget-for-year');
const logger = require('../../utils/logger');

module.exports = async () => {
  logger.info('Updating original budgets');
  const updatePromises = files
    .filter(({isOriginalDataset, path}) => isOriginalDataset && fs.existsSync(path))
    .map(updateOriginalBudgetForYear);
  await Promise.all(updatePromises);
};
