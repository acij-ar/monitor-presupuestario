const fs = require('fs');
const {datasets, db} = require('../../../config');
const dataset2Object = require('./dataset-to-object');

const files = datasets.files.filter(({isYearDataset}) => isYearDataset);
const numericColumns = datasets.columns
    .filter(({isNumeric}) => isNumeric)
    .map(({name}) => name);

module.exports = async () => {
    console.log(`Processing csv files into json db`);
    const dbObject = {};
    files.map(({year}) => {
        dbObject[year] = {};
        numericColumns.map(column => {
            dbObject[year][column] = 0;
        })
    });
    const processPromises = files.map(({filePath, year}) => dataset2Object({filePath, dbObject: dbObject[year]}));
    await Promise.all(processPromises);
    const dbString = JSON.stringify(dbObject, null, 2);
    fs.writeFileSync(db.jsonPath, dbString);
    console.log('Finished processing csv into json db');
};