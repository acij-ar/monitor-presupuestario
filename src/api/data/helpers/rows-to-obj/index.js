const setIds = require('./set-ids');
const hierarchyObj = require('./hierarchy-obj');

module.exports = (rows, options) => {
  const baseObj = hierarchyObj(rows, options);
  if (options.withIds) {
    setIds(baseObj);
  }
  return baseObj;
};
