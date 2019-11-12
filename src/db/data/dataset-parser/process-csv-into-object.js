const readCSV = require('../../../utils/read-csv');
const parseRow = require('./parse-row');
const processRowIntoObject = require('./process-row-into-object');

/**
 * Iterates a csv file, parsing its rows and passing them to the processRowIntoObject script
 *
 * @param {object} params - Object with params
 * @param {object} params.dbObject - Memory object where the final process will be stored
 * @param {object} params.file - Current file to be process
 * @param {number} params.inflation - Inflation for the corresponding file
 * @returns {Promise<void>} - Promise that resolves when the process is done
 */
module.exports = ({ dbObject, file: { path, year, numberUnitsAreMillions }, inflation }) => (
  readCSV({
    path,
    onData: (row) => {
      const parsedRow = parseRow({row, numberUnitsAreMillions});
      processRowIntoObject({row: parsedRow, dbObject, year, inflation});
    }
  })
);