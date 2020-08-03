const genericQuery = require('../helpers/query');
const rowParseInt = require('../helpers/row-parse-int');

const getPercentage = async (key, params, previousTotal) => {
  if (!params[key]) {
    return null;
  }
  const rows = await genericQuery({
    ejercicio_presupuestario: params.ejercicio_presupuestario,
    budget: params.budget,
    inflation: params.inflation,
    jurisdiction: params.jurisdiction,
    year: params.year,
    entity: ['entity', 'program', 'activity'].includes(key) ? params.entity : null,
    program: ['program', 'activity'].includes(key) ? params.program : null,
    activity: ['activity'].includes(key) ? params.activity : null,
  });
  let total = 0;
  rows.forEach(row => {
    const { budget } = rowParseInt(row);
    total += budget;
  })
  console.log(total);
  console.log(previousTotal.total);
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
