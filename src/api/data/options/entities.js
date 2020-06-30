const MYSQLConnection = require('../helpers/query/mysql-connection');
const rows2obj = require('../helpers/rows-to-obj');

module.exports = async () => {

  const db_connection = MYSQLConnection();
  const query = `
    SELECT
      ejercicio, jurisdiccion_desc, entidad_desc, programa_desc, actividad_desc, funcion_desc 
    FROM
      monitor.simplificado
    GROUP BY
      ejercicio, jurisdiccion_desc, entidad_desc, programa_desc, actividad_desc, funcion_desc;
  `;
  const [rows] = await db_connection.promise().query(query);
  return rows2obj(rows, { withBudgets: false, withIds: true});
};
