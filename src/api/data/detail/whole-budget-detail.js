const genericQuery = require('../helpers/query');

module.exports = async (params) => {
  const rows = await genericQuery(params);
  let total = 0;
  rows.forEach(({budget}) => total += budget)
  return { total };
}
