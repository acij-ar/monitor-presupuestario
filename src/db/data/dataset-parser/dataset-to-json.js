const fs = require('fs');
const { join } = require('path');
const baseJSONObject = require('./base-json-object');
const processCSVIntoObject = require('./process-csv-into-object');
const logger = require('../../../utils/logger');

/**
 * Process a csv file into a json file
 *
 * @param {object } params - Object with params
 * @param {object} params.baseFile - Object with attrs of the base file
 * @param {object} [params.originalBudgetFile] - Object with attrs of the file containing the original budget (optional)
 * @returns {Promise<void>} - Promise that resolves when the process is done
 */
module.exports = async ({ baseFile, originalBudgetFile }) => {
  const dbObject = baseJSONObject();
  await processCSVIntoObject({ file: baseFile, dbObject, });
  logger.info(`Finished processing ${baseFile.path}`);
  if (originalBudgetFile) {
    await processCSVIntoObject({ file: originalBudgetFile, dbObject, });
    logger.info(`Finished processing ${originalBudgetFile.path}`);
  }
  const dbString = JSON.stringify(dbObject, null, 2);
  const outputPath = join(__dirname, '..', 'datasets', `${baseFile.year}.json`);
  fs.writeFileSync(outputPath, dbString);
  logger.info(`Finished writing ${outputPath}`);
};
