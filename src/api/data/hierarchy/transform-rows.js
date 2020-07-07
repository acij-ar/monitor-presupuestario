const rows2obj = require('../helpers/rows-to-obj');

const extractRelationWithChildren = (data, nodes, baseObj, maxDepth, depth = 0) => {
  baseObj.children.forEach(child => {
    data.push([baseObj.id, child.id]);
    nodes.push({
      id: child.id,
      name: child.name,
      layout: 'hanging',
    });
    if (depth < maxDepth) {
      extractRelationWithChildren(data, nodes, child, maxDepth, depth + 1);
    }
  });
  return {data, nodes};
};

const getMaxDepth = (params) => {
  return params.activity ? 5 :
    params.program ? 4 :
      params.entity ? 3 :
        params.jurisdiction ? 2 : 1;
};

module.exports = (params, rows) => {
  const baseObj = rows2obj(rows, {withIds: true});
  const maxDepth = getMaxDepth(params);
  return extractRelationWithChildren([], [], baseObj, maxDepth);
};
