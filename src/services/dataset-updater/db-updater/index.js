const resetDB = require('../../db/reset-db');
const fs = require('fs');
const {datasets: {files}} = require('../../../config');
const loadInflationDataset = require('./load-inflation-dataset');
const prepareStatements = require('./prepare-statements');
const updateInDB = require('./update-in-db');

const yearFiles = files.filter(file => file.isYearDataset);

module.exports = async () => {
    console.log('Started updating db');
    resetDB();
    const inflation = await loadInflationDataset();
    const statements = prepareStatements();

    yearFiles.map(file => {
        const {jsonPath, year} = file;
        const jsonContent = fs.readFileSync(jsonPath);
        const jsonDB = {'Presupuesto total': JSON.parse(jsonContent)};
        const yearInflation = inflation[year];
        console.log(`Updating year ${year} in db`);
        updateInDB({jsonDB, statements, year, yearInflation});
    });

    console.log('Finished updating db');
};
