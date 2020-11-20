const getYearsForGroup = (years) => {
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);
  return minYear === maxYear ? minYear.toString() : `${minYear} - ${maxYear}`;
}

const setIds = (obj) => {
  obj.children.forEach((child, index) => {
    child.id = `${obj.id}_${index}`
    const { years } = child;
    if (years) {
      child.label = `${child.name} (${getYearsForGroup(years)})`;
      delete child.years;
    }
    setIds(child);
  })
};

module.exports = (baseObj) => {
  baseObj.id = '0';
  setIds(baseObj);
};
