const readCSV = require('../../../utils/read-csv');
const parseRow = require('./parse-row');
const processRowIntoObject = require('./process-row-into-object');

module.exports = ({ dbObject, file: { path, year } }) => (
  readCSV({
    path,
    onData: (row) => {
      const parsedRow = parseRow(row);
      processRowIntoObject({row: parsedRow, dbObject, year});
    }
  })
);