const budgetQuery = require('../../db/budget-query');

const rowsForGroup = (groupName, params) => {
  const groupParams = params.groups.filter(item => item.group === groupName);
  const groupRowsPromises = groupParams.map(group => budgetQuery({
    ...params,
    ...group,
  }))
  return Promise.all(groupRowsPromises)
};

module.exports = (params) => Promise.all([
  rowsForGroup('0', params),
  rowsForGroup('1', params),
])
