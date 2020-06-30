const setIds = (obj) => {
  obj.children.forEach((child, index) => {
    child.id = `${obj.id}_${index}`
    setIds(child);
  })
};

module.exports = (baseObj) => {
  baseObj.id = '0';
  setIds(baseObj);
};
