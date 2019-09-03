const readCSV = require('../../../utils/read-csv');
const markAllChildrenAsPossiblyModified = require('./mark-children');
const updateBudgetInObject = require('./update-budget-in-object');

module.exports = async ({filePath, year}) => {
  const dataset = [];
  await readCSV({
    path: filePath,
    onData: row => dataset.push(row),
  });
  const {jsonPath} = files.find(file => file.isYearDataset && year === file.year);
  const jsonContent = fs.readFileSync(jsonPath);
  const jsonObject = JSON.parse(jsonContent);
  dataset.map(correction => {
    const targetObject = updateBudgetInObject({correction, jsonObject});
    if (correction.marcar_hijos_con_posible_reasignacion) {
      markAllChildrenAsPossiblyModified(targetObject)
    }
  });
  const newJsonContent = JSON.stringify(jsonObject, null, 2);
  fs.writeFileSync(jsonPath, newJsonContent);
};
