const flatten = require('lodash/flatten');
const genericQuery = require('../helpers/query');

const rowsForGroup = async (groupName, params) => {
  const groupParams = params.groups.filter(item => item.group === groupName);
  const groupRowsPromises = groupParams.map(group => genericQuery({
    ...params,
    ...group,
  }))
  const groupRows = await Promise.all(groupRowsPromises)
  return flatten(groupRows);
};

module.exports = (params) => Promise.all([
  rowsForGroup('0', params),
  rowsForGroup('1', params),
])
