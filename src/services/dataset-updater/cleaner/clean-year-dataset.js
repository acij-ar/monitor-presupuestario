const fs = require('fs');
const CSVWriteStream = require('csv-write-stream');
const { datasets: { columns } } = require('../../../config');
const parseNumericValue = require('./parse-numeric-value');
const readCSV = require('../../../utils/read-csv');

module.exports = ({rawPath, filePath}) => {
    console.log(`Cleaning file ${rawPath}`);
    const headers = columns.map(column => column.name);
    const numeric_columns = columns.filter(column => column.isNumeric).map(column => column.name);
    const outputStream = fs.createWriteStream(filePath);
    const csvWriter = CSVWriteStream({headers});
    csvWriter.pipe(outputStream);

    return readCSV({
        path: rawPath,
        onData: (row) => {
            numeric_columns.map(columnName => row[columnName] = parseNumericValue(row[columnName]));
            csvWriter.write(row);
        }
    }).then(() => {
        csvWriter.end();
        console.log(`Finished cleaning file ${filePath}`);
    });
};
