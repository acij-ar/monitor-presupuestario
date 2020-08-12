const genericQuery = require('../helpers/query');

const rowsForGroup = (groupName, params) => {
  const groupParams = params.groups.filter(item => item.group === groupName);
  const groupRowsPromises = groupParams.map(group => genericQuery({
    ...params,
    ...group,
  }))
  return Promise.all(groupRowsPromises)
};

module.exports = (params) => Promise.all([
  rowsForGroup('0', params),
  rowsForGroup('1', params),
])
