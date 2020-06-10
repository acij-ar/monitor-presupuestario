// TODO: probably this folder should die after data management refactor

const createTables = require('../db/management/create-tables');
const deleteTables = require('../db/management/delete-tables');
const fs = require('fs');
const {datasets: {files}} = require('../../config');
const loadInflationDataset = require('./load-inflation-dataset');
const prepareStatements = require('./prepare-statements');
const updateInDB = require('./update-in-db');
const logger = require('../../utils/logger');

const yearFiles = files.filter(file => file.jsonPath);

module.exports = async () => {
  logger.info('Started updating db');
  deleteTables();
  createTables();
  const inflation = await loadInflationDataset();
  const statements = prepareStatements();

  yearFiles.map(file => {
    const {jsonPath, year} = file;
    if (fs.existsSync(jsonPath)) {
      const jsonContent = fs.readFileSync(jsonPath);
      const jsonDB = {'Presupuesto total': JSON.parse(jsonContent)};
      const yearInflation = inflation[year] || 1;
      logger.info(`Updating year ${year} in db`);
      updateInDB({jsonDB, statements, year, yearInflation});
    }
  });

  logger.info('Finished updating db');
};
