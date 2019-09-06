const {datasets} = require('../../../config');
const dataset2Object = require('./dataset-to-object');
const fs = require('fs');

const files = datasets.files.filter(({isYearDataset}) => isYearDataset);
const numericColumns = datasets.columns
    .filter(({isNumeric}) => isNumeric)
    .map(({name}) => name);

const initObject = () => {
    const dbObject = {};
    files.map(({year}) => {
        dbObject[year] = {dependencias: {}};
        numericColumns.map(column => {
            dbObject[year][column] = 0;
        });
        dbObject[year].credito_original = 0;
    });
    return dbObject;
};

module.exports = async () => {
    console.log('Processing csv files into db.json');
    const dbObject = initObject();
    const processDataset = ({filePath, jsonPath, year}) => {
        if (fs.existsSync(filePath)) {
            return dataset2Object({
                jsonPath,
                filePath,
                dbObject: dbObject[year],
                year,
            })
        } else {
            return Promise.resolve();
        }
    };
    const processPromises = files.map(processDataset);
    await Promise.all(processPromises);
};
