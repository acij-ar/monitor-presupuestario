const MYSQLConnection = require('../mysql-connection');

module.exports = async (params) => {
  const db_connection = MYSQLConnection();

  const qry = `
    SELECT * FROM monitor.simplificado 
    WHERE 
      ejercicio = ?
      ${params.jurisdiction ? 'AND jurisdiccion_desc = ?' : ''}
      ${params.entity ? 'AND entidad_desc = ?' : ''}
      ${params.program ? 'AND programa_desc = ?' : ''}
      ${params.activity ? 'AND actividad_desc = ?' : ''}
      ${params.function ? 'AND funcion_desc = ?' : ''}
    ;
  `;
  const queryParams = [
    params.year,
    params.jurisdiction,
    params.entity,
    params.program,
    params.activity,
    params.function,
  ].filter(elem => elem);
  const [rows] = await db_connection.promise().query(qry, queryParams);

  db_connection.end();

  return rows;
}