const table = require('./table');
const baseQuery = require('../helpers/base-query');

module.exports = async (params={}) => {
  return baseQuery({
    params,
    table: table(params),
  })
};
