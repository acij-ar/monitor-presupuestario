module.exports = (rows, params) => {
  const detailLevel = params.function || params.activity ? 'funcion_desc' :
      params.program ? 'actividad_desc' :
        params.entity ? 'programa_desc' :
          params.jurisdiction ? 'entidad_desc' : 'jurisdiccion_desc';
  const categories = {};
  rows.forEach(row => {
    const name = row[detailLevel];
    const { original, vigente, devengado } = row;
    if (categories[name]) {
      categories[name].original += original;
      categories[name].vigente += vigente;
      categories[name].devengado += devengado;
    } else {
      categories[name] = { original, vigente, devengado };
    }
  })
  return Object.entries(categories).map(([name, budgets]) => ({...budgets, name}));
}
