const dbConnection = require('../mysql-connection');
const columns = require('./columns');
const conditions = require('./conditions');

module.exports = async ({ params, table }) => {
  const { whereConditions, whereParams } = conditions(params);
  const query = `
    SELECT ${columns(params, table)}
    FROM monitor.${table} 
    ${whereConditions ? `WHERE ${whereConditions}` : ''}
    ;
  `;
  const [rows] = await dbConnection.query(query, whereParams);
  return rows;
};
