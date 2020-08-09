const dbConnection = require('./mysql-connection');
const columns = require('./columns');
const conditions = require('./conditions');

module.exports = async (params={}) => {
  const { whereConditions, whereParams } = conditions(params);
  const qry = `
    SELECT
      ${columns(params)}
    FROM monitor.simplificado 
      ${whereConditions ? `WHERE ${whereConditions}` : ''}
    ;
  `;
  const [rows] = await dbConnection.query(qry, whereParams);
  return rows;
};
