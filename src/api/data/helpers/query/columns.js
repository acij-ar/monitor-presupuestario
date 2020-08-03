const getSelectedBudget = (params) => {
  const budgetColumns = {
    'Original': 'credito_presupuestado as budget',
    'Vigente': 'credito_vigente as budget',
    'Devengado': 'credito_devengado as budget',
    'all': 'credito_presupuestado as original, credito_vigente as vigente, credito_devengado as devengado'
  };
  return budgetColumns[params.budget];
};

module.exports = (params) => {
  const columns = ['ejercicio_presupuestario', 'jurisdiccion_desc', 'entidad_desc', 'programa_desc', 'actividad_desc']
  const selectedBudget = getSelectedBudget(params);
  if (selectedBudget) columns.push(selectedBudget);
  return columns.join(', ');
}
