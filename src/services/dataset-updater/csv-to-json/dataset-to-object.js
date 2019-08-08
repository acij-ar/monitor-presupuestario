const csv = require('fast-csv');
const {datasets} = require('../../../config');

const categories = datasets.columns
    .filter(({categoryLevel}) => typeof categoryLevel === 'number')
    .sort((datasetA, datasetB) => datasetA.categoryLevel - datasetB.categoryLevel)
    .map(({name}) => name);
const numericColumns = datasets.columns
    .filter(({isNumeric}) => isNumeric)
    .map(({name}) => name);

const processRowIntoDb = ({row, dbObject}) => {
    let scopedDb = dbObject;
    numericColumns.map(column => {
        row[column] = parseInt(row[column]);
        scopedDb[column] += row[column];
    });
    categories.map((category, index) => {
        const entityName = row[category];
        if (!scopedDb[entityName]) {
            scopedDb[entityName] = {};
            if (index !== categories.length -1) {
                scopedDb[entityName].dependencies = {};
            }
            numericColumns.map(column => {
                scopedDb[entityName][column] = 0;
            })
        }
        numericColumns.map(column => {
            scopedDb[entityName][column] += row[column];
        });
        scopedDb = scopedDb[entityName].dependencies;
    })
};

module.exports = ({filePath, dbObject}) => (
    new Promise(resolve => (
        fs.createReadStream(filePath)
            .pipe(csv.parse({headers: true}))
            .on('data', row => {
                processRowIntoDb({row, dbObject})
            })
            .on('end', () => {
                resolve();
            })
    ))
);
