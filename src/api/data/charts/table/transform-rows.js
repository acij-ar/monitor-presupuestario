module.exports = (rows, params) => {
  const detailLevel = params.program || params.activity ? 'actividad_desc' :
    params.entity ? 'programa_desc' :
      params.jurisdiction ? 'entidad_desc' : 'jurisdiccion_desc';
  const categories = {};
  rows.forEach(row => {
    const name = row[detailLevel];
    const {original, vigente, devengado} = row;
    categories[name] = {original, vigente, devengado};
  });
  return Object.entries(categories).map(([name, budgets]) => ({...budgets, name}));
};
