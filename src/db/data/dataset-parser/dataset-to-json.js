const fs = require('fs');
const { join } = require('path');
const readCSV = require('../../../utils/read-csv');
const baseJSONObject = require('./base-json-object');
const parseRow = require('./parse-row');
const processRowIntoObject = require('./process-row-into-object');
const logger = require('../../../utils/logger');
const loadOriginalBudget = require('./load-original-budget');

/**
 * Process a csv file into a json file
 *
 * @param {object } params - Object with params
 * @param {object} params.baseFile - Object with attrs of the base file
 * @param {string} params.baseFile.path - Path of the base file beign process
 * @param {number} params.baseFile.year - Year of the base file being processed
 * @returns {Promise<void>} - Promise that resolves when the process is done
 */
module.exports = async ({ baseFile: { path, year }, originalBudgetFile }) => {
  const dbObject = baseJSONObject();
  await readCSV({
    path,
    onData: (row) => {
      const parsedRow = parseRow(row);
      processRowIntoObject({row: parsedRow, dbObject, year});
    }
  });
  if (originalBudgetFile) {
    loadOriginalBudget({dbObject, year, path: originalBudgetFile.path})
  }
  const dbString = JSON.stringify(dbObject, null, 2);
  const outputPath = join(__dirname, '..', 'datasets', `${year}.json`);
  fs.writeFileSync(outputPath, dbString);
  logger.info(`Finished processing ${path}`);
};
