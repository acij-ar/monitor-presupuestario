const genericQuery = require('../helpers/query');

const getPercentage = async (key, params, previousTotal) => {
  if (!params[key]) {
    return null;
  }
  const rows = await genericQuery({
    ejercicio: params.ejercicio,
    budget: params.budget,
    jurisdiction: params.jurisdiction,
    entity: ['entity', 'program', 'activity'].includes(key) ? params.entity : null,
    program: ['program', 'activity'].includes(key) ? params.program : null,
    activity: ['activity'].includes(key) ? params.activity : null,
  });
  let total = 0;
  rows.forEach(({budget}) => total += budget)
  return {
    name: params[key],
    percentage: (total * 100 / previousTotal.total).toFixed(2),
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
