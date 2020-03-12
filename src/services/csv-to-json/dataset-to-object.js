const fs = require('fs');
const readCSV = require('../../utils/read-csv');
const {datasets} = require('../../config');
const normalizeName = require('../../utils/normalize-name');
const parseNumericValue = require('../../utils/parse-numeric-value');
const logger = require('../../utils/logger');

const categories = datasets.columns
  .filter(({categoryLevel}) => typeof categoryLevel === 'number')
  .sort((datasetA, datasetB) => datasetA.categoryLevel - datasetB.categoryLevel)
  .map(({name}) => name);
const numericColumns = datasets.columns
  .filter(({isNumeric}) => isNumeric)
  .map(({name}) => name);

const addNumericColumns = ({scopedObject, row, year}) => {
  numericColumns.map(column => {
    scopedObject[column] += parseNumericValue(row[column]);
  });
  if (year < 2016) { // TODO: avoid this hardcoded value
    scopedObject.credito_original += parseNumericValue(row.credito_presupuestado);
  }
};

const processRowIntoObject = ({row, dbObject, year}) => {
  let scopedObject = dbObject;
  addNumericColumns({row, scopedObject, year});
  scopedObject = scopedObject.dependencias;
  categories.map((category, index) => {
    const rawName = row[category];
    const entityName = normalizeName(rawName);
    if (!scopedObject[entityName]) {
      scopedObject[entityName] = {};
      if (index !== categories.length - 1) {
        scopedObject[entityName].dependencias = {};
      }
      numericColumns.map(column => {
        scopedObject[entityName][column] = 0;
        scopedObject[entityName]['credito_original'] = 0;
      });
    }
    addNumericColumns({row, scopedObject: scopedObject[entityName], year});
    scopedObject = scopedObject[entityName].dependencias;
  });
};

module.exports = async ({path, dbObject, jsonPath, year}) => {
  await readCSV({
    path,
    onData: (row) => processRowIntoObject({row, dbObject, year}),
  });
  const dbString = JSON.stringify(dbObject, null, 2);
  fs.writeFileSync(jsonPath, dbString);
  logger.info(`Finished processing ${jsonPath}`);
};
