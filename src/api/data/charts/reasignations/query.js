const reassignationQuery = require('../../db/reassignation-query');
const flatten = require('lodash/flatten');

const rowsForGroup = async (groupName, params) => {
  const groupParams = params.groups.filter(item => item.group === groupName);
  if (!groupParams || groupParams.length === 0) return [];
  const groupRowsPromises = groupParams.map(group => reassignationQuery({
    ...params,
    ...group,
  }));
  const groupRows = await Promise.all(groupRowsPromises);
  return flatten(groupRows);
};


module.exports = async (params) => {
  if (params.year) {
    return reassignationQuery(params);
  }

  if (!params.groups) {
    return [];
  }

  const groupResults = await Promise.all([
    rowsForGroup('0', params),
    rowsForGroup('1', params),
  ]);
  return flatten(groupResults);
};
