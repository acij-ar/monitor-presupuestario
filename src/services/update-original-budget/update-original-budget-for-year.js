const readCSV = require('../../utils/read-csv');
const markAllChildrenAsPossiblyModified = require('./mark-children');
const updateBudgetInObject = require('./update-budget-in-object');
const {datasets: { files, columns }} = require('../../config');
const fs = require('fs');
const logger = require('../../utils/logger');

const numericColumns = columns.filter(({isNumeric}) => isNumeric).map(({name}) => name);

module.exports = async ({path, year}) => {
  const dataset = [];
  await readCSV({
    path,
    onData: row => dataset.push(row),
  });
  const {jsonPath} = files.find(file => year === file.year && file.jsonPath);
  let jsonObject;
  if (fs.existsSync(jsonPath)) {
    const jsonContent = fs.readFileSync(jsonPath);
    jsonObject = JSON.parse(jsonContent);
  } else {
    jsonObject = { dependencias: {}, credito_original: 0 };
    numericColumns.map(column => {
      jsonObject[column] = 0;
    });
  }
  dataset.map(correction => {
    const {targetObject} = updateBudgetInObject({correction, jsonObject, year});
    if (correction.marcar_hijos_con_posible_reasignacion === 'si') {
      markAllChildrenAsPossiblyModified(targetObject);
    }
  });
  const newJsonContent = JSON.stringify(jsonObject, null, 2);
  fs.writeFileSync(jsonPath, newJsonContent);
  logger.info(`Updated ${jsonPath} with original budgets`);
};