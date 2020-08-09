const dbConnection = require('../../helpers/query/mysql-connection');
const rows2obj = require('../../helpers/rows-to-obj');

module.exports = async () => {
  const query = `
    SELECT
      ejercicio_presupuestario, jurisdiccion_desc, entidad_desc, programa_desc, actividad_desc 
    FROM
      monitor.simplificado
    GROUP BY
      ejercicio_presupuestario, jurisdiccion_desc, entidad_desc, programa_desc, actividad_desc
    ORDER BY 
      jurisdiccion_desc, entidad_desc, programa_desc, actividad_desc;
  `;
  const [rows] = await dbConnection.query(query);
  return rows2obj(rows, { withBudgets: false, withIds: true});
};
