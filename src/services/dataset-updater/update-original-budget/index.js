const fs = require('fs');
const {datasets: { files }} = require('../../../config');
const updateOriginalBudgetForYear = require('./update-original-budget-for-year');

module.exports = async () => {
    console.log('Updating original budgets');
    const updatePromises = files
        .filter(({isOriginalDataset, filePath}) => isOriginalDataset && fs.existsSync(filePath))
        .map(updateOriginalBudgetForYear);
    await Promise.all(updatePromises);
};
