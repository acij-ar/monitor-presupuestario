const readCSV = require('../../../utils/read-csv');
const markAllChildrenAsPossiblyModified = require('./mark-children');
const updateBudgetInObject = require('./update-budget-in-object');
const {datasets: { files }} = require('../../../config');
const fs = require('fs');
const CSVWriteStream = require('csv-write-stream');

module.exports = async ({filePath, year, errorsPath}) => {
  const dataset = [];
  await readCSV({
    path: filePath,
    onData: row => dataset.push(row),
  });
  const {jsonPath} = files.find(file => file.isYearDataset && year === file.year);
  const jsonContent = fs.readFileSync(jsonPath);
  const jsonObject = JSON.parse(jsonContent);
  const errors = [];
  dataset.map(correction => {
    const {targetObject, found} = updateBudgetInObject({correction, jsonObject});
    if (found && correction.marcar_hijos_con_posible_reasignacion === 'si') {
      markAllChildrenAsPossiblyModified(targetObject)
    }
    if (!found) {
      errors.push(correction);
    }
  });
  const newJsonContent = JSON.stringify(jsonObject, null, 2);
  fs.writeFileSync(jsonPath, newJsonContent);
  if (errors.length) {
    const outputStream = fs.createWriteStream(errorsPath);
    const csvWriter = CSVWriteStream({headers: Object.keys(errors[0])});
    csvWriter.pipe(outputStream);
    errors.map(error => csvWriter.write(error));
    csvWriter.end();
    console.log(`${errors.length} errors for ${year}`)
  }
};
