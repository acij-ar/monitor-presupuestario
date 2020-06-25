const MYSQLConnection = require('./mysql-connection');
const columns = require('./columns');
const conditions = require('./conditions');

module.exports = async (params) => {
  const db_connection = MYSQLConnection();

  const { whereConditions, whereParams } = conditions(params);
  const qry = `
    SELECT
      ${columns(params)}
    FROM monitor.simplificado 
    WHERE 
      ${whereConditions}
    ;
  `;
  const [rows] = await db_connection.promise().query(qry, whereParams);
  db_connection.end();

  return rows;
};
