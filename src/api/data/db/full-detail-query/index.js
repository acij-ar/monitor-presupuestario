const baseQuery = require('../helpers/base-query');

module.exports = async (params={}) => {
  return baseQuery({
    params,
    table: params.table,
  })
};
