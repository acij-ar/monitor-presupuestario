const rows2obj = require('../helpers/rows-to-obj');

const budgetComparison = (a, b) => b.budget - a.budget;

const obj2sunburstData = (baseObj, sunburstData, parentId = '0') => {
  Object.values(baseObj.children).sort(budgetComparison).forEach((child, index) => {
    const id = `${parentId}_${index}`;
    sunburstData.push({
      id,
      parent: parentId,
      name: child.name,
      value: child.budget
    });
    if (child.children) {
      obj2sunburstData(child, sunburstData, id);
    }
  });
};

module.exports = (params, rows) => {
  const baseObj = rows2obj(params, rows);
  const sunburstData = [
    {
      id: '0',
      parent: '',
      name: baseObj.name,
      value: baseObj.budget
    }
  ];
  obj2sunburstData(baseObj, sunburstData);
  return sunburstData;
};
