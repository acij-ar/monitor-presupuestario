const stringify = require('fast-json-stable-stringify');
const genericQuery = require('../helpers/query');

const totalCache = {};

module.exports = async (params) => {
  const cacheKey = stringify(params);
  if (totalCache[cacheKey]) {
    return { total: totalCache[cacheKey] };
  }

  const rows = await genericQuery(params);
  let total = 0;
  rows.forEach((row) => {
    const { budget } = row;
    total += budget;
  })
  totalCache[cacheKey] = total;
  return { total };
}
