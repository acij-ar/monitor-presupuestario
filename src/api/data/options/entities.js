const MYSQLConnection = require('../helpers/query/mysql-connection');
const convertToOption = require('./convert-to-option');

module.exports = async () => {
  const jurisdicciones = new Set();
  const entidades = new Set();
  const programas = new Set();
  const actividades = new Set();
  const funciones = new Set();

  const db_connection = MYSQLConnection();
  const query = 'SELECT jurisdiccion_desc, entidad_desc, programa_desc, actividad_desc, funcion_desc FROM monitor.simplificado;';
  const [rows] = await db_connection.promise().query(query);
  rows.forEach(row => {
    jurisdicciones.add(row.jurisdiccion_desc);
    entidades.add(row.entidad_desc);
    programas.add(row.programa_desc);
    actividades.add(row.actividad_desc);
    funciones.add(row.funcion_desc);
  })

  return {
    jurisdictions: Array.from(jurisdicciones).map(convertToOption),
    entities: Array.from(entidades).map(convertToOption),
    programs: Array.from(programas).map(convertToOption),
    activities: Array.from(actividades).map(convertToOption),
    functions: Array.from(funciones).map(convertToOption),
  }
};
