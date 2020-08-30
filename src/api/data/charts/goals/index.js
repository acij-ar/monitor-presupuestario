const dbConnection = require('../../db/mysql-connection');
const sortBy = require('lodash/sortBy');

module.exports = async (req, res, next) => {
  const query = `SELECT * FROM metas_fisicas_s WHERE jurisdiccion_desc = ? AND programa_desc = ? AND ejercicio_presupuestario = ?;`;
  const [rows] = await dbConnection.query(query, [req.query.jurisdiction, req.query.program, req.query.year]);
  const goals = rows.map(row => {
    const {
      medicion_fisica_desc: measure,
      ejecutado_anual_vigente: execution,
      programacion_inicial: expected,
      unidad_medida_desc: unit,
    } = row;
    return {
      measure,
      unit,
      execution,
      expected,
    }
  })
  res.locals.response = sortBy(goals, ['measure', 'unit']);
  next();
};

