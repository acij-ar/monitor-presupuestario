const dbConnection = require('../mysql-connection');
const columns = require('./columns');
const conditions = require('./conditions');
const table = require('./table');

module.exports = async (params={}) => {
  const { whereConditions, whereParams } = conditions(params);
  const query = `
    SELECT ${columns(params)}
    FROM ${table(params)} 
    ${whereConditions ? `WHERE ${whereConditions}` : ''}
    ;
  `;
  const [rows] = await dbConnection.query(query, whereParams);
  return rows;
};
