const budgetQuery = require('../../db/budget-query');

const getPercentage = async (key, params, previousTotal) => {
  if (!params[key]) {
    return null;
  }
  const [{ budget: total }] = await budgetQuery({
    ejercicio_presupuestario: params.ejercicio_presupuestario,
    budget: params.budget,
    inflation: params.inflation,
    jurisdiction: params.jurisdiction,
    year: params.year,
    entity: ['entity', 'program', 'activity'].includes(key) ? params.entity : null,
    program: ['program', 'activity'].includes(key) ? params.program : null,
    activity: ['activity'].includes(key) ? params.activity : null,
  });
  const percentage = (total * 100 / previousTotal.total);
  return {
    name: params[key],
    percentage: isNaN(percentage) ? 0 : percentage.toFixed(2),
    total,
  }
};


module.exports = async (params, totalBudget) => {
  const jurisdiction =  await getPercentage('jurisdiction', params, totalBudget);
  const entity = await getPercentage('entity', params, jurisdiction)
  const program = await getPercentage('program', params, entity);
  const activity = await getPercentage('activity', params, program)
  return {
    jurisdiction,
    entity,
    program,
    activity,
  };
}
