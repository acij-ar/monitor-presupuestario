const table = require('./table');
const baseQuery = require('../helpers/base-query');

module.exports = async (params={}) => {
  return baseQuery({
    params: {
      ...params,
      reassignationQuery: true,
    },
    table: table(params),
  })
};
