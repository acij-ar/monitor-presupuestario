const fs = require('fs');
const { join } = require('path');
const baseJSONObject = require('./base-json-object');
const processCSVIntoObject = require('./process-csv-into-object');
const logger = require('../../../utils/logger');

/**
 * Process a csv file into a json file
 *
 * @param {object} params - Object with params
 * @param {Array} params.files - Array with dataset attrs objects
 * @param {object} params.inflationFile - Object with the inflation dataset attrs
 * @returns {Promise<void>} - Promise that resolves when the process is done
 */
module.exports = async ({ files, inflationFile }) => {
  const dbObject = baseJSONObject();
  for (let i=0; i<files.length; i++) {
    const file = files[i];
    await processCSVIntoObject({ file, dbObject, inflationFile });
    logger.info(`Finished processing ${file.path}`);
  }
  const dbString = JSON.stringify(dbObject, null, 2);
  const outputPath = join(__dirname, '..', 'datasets', `${files[0].year}.json`);
  fs.writeFileSync(outputPath, dbString);
  logger.info(`Finished writing ${outputPath}`);
};
