const rows2obj = require('../helpers/rows-to-obj');

const budgetComparison = (a, b) => b.budget - a.budget;

const obj2sunburstData = (baseObj, sunburstData, maxDepth, depth=0) => {
  const children = Object.values(baseObj.children).sort(budgetComparison).filter(({ budget }) => budget > 0);
  children.forEach(child => {
    sunburstData.push({
      id: child.id,
      parent: baseObj.id,
      name: child.name,
      value: child.budget
    });
    if (child.children && depth < maxDepth) {
      obj2sunburstData(child, sunburstData, maxDepth, depth+1);
    }
  });
};

const getMaxDepth = (params) => {
    return params.function ? 7 :
      params.activity ? 6 :
        params.program ? 5 :
          params.entity ? 4 : 3
}

module.exports = (rows, params) => {
  const baseObj = rows2obj(rows, { withIds: true, withBudgets: true });
  const sunburstData = [];
  const maxDepth = getMaxDepth(params);
  obj2sunburstData(baseObj, sunburstData, maxDepth);
  return sunburstData;
};
