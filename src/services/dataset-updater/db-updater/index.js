const {datasets} = require('../../../config');
const availableDatasets = datasets.files;
const updateBudgetTables = require('./update-budget-tables');
const updateInflationTable = require('./update-inflation-table');

module.exports = () => {
    availableDatasets.map(dataset => {
        if (dataset.isYearDataset) {
            updateBudgetTables(dataset)
        } else {
            updateInflationTable(dataset)
        }
    })
};

module.exports();