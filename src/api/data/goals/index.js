const MYSQLConnection = require('../helpers/query/mysql-connection');


module.exports = async (req, res) => {
  const db_connection = MYSQLConnection();
  const query = `SELECT * FROM metas_fisicas_s WHERE jurisdiccion_desc = ? AND programa_desc = ? AND ejercicio_presupuestario = ?;`;
  const [rows] = await db_connection.promise().query(query, [req.query.jurisdiction, req.query.program, req.query.year]);
  const response = rows.map(row => {
    const {
      medicion_fisica_desc: medicion,
      ejecutado_anual_vigente: ejecutado,
      programacion_inicial_ajustada: programacion,
      unidad_medida_desc: unidad,
    } = row;
    return `${medicion}: ${parseInt(ejecutado)} de ${parseInt(programacion)} (${unidad})`
  })
  res.json(response);
};

