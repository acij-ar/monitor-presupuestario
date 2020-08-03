const genericQuery = require('../helpers/query');
const rowParseInt = require('../helpers/row-parse-int');

module.exports = async (params) => {
  const rows = await genericQuery(params);
  let total = 0;
  rows.forEach((row) => {
    const { budget } = rowParseInt(row);
    total += budget;
  })
  return { total };
}
