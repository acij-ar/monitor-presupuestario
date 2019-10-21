const fs = require('fs');
const { join } = require('path');
const readCSV = require('../../../utils/read-csv');
const baseJSONObject = require('./base-json-object');
const parseRow = require('./parse-row');
const processRowIntoObject = require('./process-row-into-object');
const logger = require('../../../utils/logger');

/**
 * Process a csv file into a json file
 *
 * @param {object } params - Object with params
 * @param {string} params.path - Path of file beign process
 * @param {number} params.year - Year of file being processed
 * @returns {Promise<void>} - Promise that resolves when the process is done
 */
module.exports = async ({path, year}) => {
  const dbObject = baseJSONObject();
  await readCSV({
    path,
    onData: (row) => {
      const parsedRow = parseRow(row);
      processRowIntoObject({row: parsedRow, dbObject, year});
    }
  });
  const dbString = JSON.stringify(dbObject, null, 2);
  const outputPath = join(__dirname, '..', 'datasets', `${year}.json`);
  fs.writeFileSync(outputPath, dbString);
  logger.info(`Finished processing ${path}`);
};
