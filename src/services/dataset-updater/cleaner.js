const csv = require('fast-csv');
const fs = require('fs');
const CSVWriteStream = require('csv-write-stream');
const columns = require('../dataset-columns');

const parseNumericValue = numericString => {
    if (numericString.includes(',')) {
        const [ integerString, decimalString ] = numericString.split(',');
        const decimalValue = parseFloat(`0.${decimalString}`) * 1e6;
        return parseInt(integerString) * 1e6 + Math.floor(decimalValue)
    }
    return parseInt(numericString) * 1e6;
};

module.exports = ({rawPath, filePath}) => {
    console.log(`Cleaning file ${rawPath}`);
    const headers = columns.map(column => column.name);
    const numeric_columns = columns.filter(column => column.isNumeric).map(column => column.name);
    const outputStream = fs.createWriteStream(filePath);
    const csvWriter = CSVWriteStream({headers});
    csvWriter.pipe(outputStream);

    return new Promise(resolve => {
        fs.createReadStream(rawPath)
            .pipe(csv.parse({headers: true}))
            .on('data', row => {
                numeric_columns.map(columnName => row[columnName] = parseNumericValue(row[columnName]));
                csvWriter.write(row);
            })
            .on('end', () => {
                csvWriter.end();
                console.log(`Finished cleaning file ${filePath}`);
                resolve();
            });

    })
};
