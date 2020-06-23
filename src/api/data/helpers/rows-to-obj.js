const row2obj = (row, baseObj, key, budget) => {
  const name = row[key];
  if (!baseObj.children[name]) {
    baseObj.children[name] = {
      name,
      budget: 0,
      children: {},
    };
  }
  baseObj.children[name].budget += budget;
  return baseObj.children[name];
};

module.exports = (params, rows) => {
  const baseObj = {name: params.year, budget: 0, children: {}};
  const hierarchy = [
    'funcion_desc', 'jurisdiccion_desc', 'entidad_desc',
    // 'programa_desc', 'actividad_desc',
  ];
  rows.forEach(row => {
    const { budget } = row;
    baseObj.budget += budget
    hierarchy.reduce((acumm, level) => row2obj(row, acumm, level, budget), baseObj);
  });
  return baseObj
}
