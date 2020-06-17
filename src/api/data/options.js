const MYSQLConnection = require('./mysql-connection');

const convertToOption = (name) => ({ name, value:name });

const getEntities = async () => {
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
    jurisdicciones: Array.from(jurisdicciones).map(convertToOption),
    entidades: Array.from(entidades).map(convertToOption),
    programas: Array.from(programas).map(convertToOption),
    actividades: Array.from(actividades).map(convertToOption),
    funciones: Array.from(funciones).map(convertToOption),
  }
};

const getYears = async () => {
  const db_connection = MYSQLConnection();
  const query = 'SELECT DISTINCT(ejercicio) FROM monitor.simplificado;';
  const [rows] = await db_connection.promise().query(query);
  return rows.map(({ ejercicio }) => ejercicio).map(convertToOption);
}

const getOptions = async () => {
  const entities = await getEntities();
  return {
    ...entities,
    budgets: ['Original', 'Vigente', 'Devengado'].map(convertToOption),
    inflation: ['Ajustada', 'Sin ajustar'].map(convertToOption),
    years: await getYears(),
  }
};

module.exports = async (req, res) => {
  const options = await getOptions();
  res.json(options);
};
