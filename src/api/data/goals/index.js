const MYSQLConnection = require('../helpers/query/mysql-connection');


module.exports = async (req, res, next) => {
  const db_connection = MYSQLConnection();
  const query = `SELECT * FROM metas_fisicas_s WHERE jurisdiccion_desc = ? AND programa_desc = ? AND ejercicio_presupuestario = ?;`;
  const [rows] = await db_connection.promise().query(query, [req.query.jurisdiction, req.query.program, req.query.year]);
  res.locals.response = rows.map(row => {
    const {
      medicion_fisica_desc: medicion,
      ejecutado_anual_vigente: ejecutado,
      programacion_inicial: programacion,
      unidad_medida_desc: unidad,
    } = row;
    return `${medicion}. ${unidad}: ${parseInt(ejecutado)} de ${parseInt(programacion)}`
  })
  // Agregar una primer fila explicando qué datos estamos tomando
  next();
};

