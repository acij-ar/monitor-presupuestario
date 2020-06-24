const MYSQLConnection = require('../mysql-connection');

const getSelectedBudget = (params) => {
  const budgetColumns = {
    'Original': 'credito_presupuestado',
    'Vigente': 'credito_vigente',
    'Devengado': 'credito_devengado',
  };
  return budgetColumns[params.budget];
};

module.exports = async (params) => {
  const db_connection = MYSQLConnection();

  const selectedBudget = getSelectedBudget(params);
  const qry = `
    SELECT
      jurisdiccion_desc,
      entidad_desc,
      programa_desc,
      actividad_desc,
      funcion_desc,
      ${
         selectedBudget ? `${selectedBudget} as budget` : 
           `credito_presupuestado as original, credito_vigente as vigente, credito_devengado as devengado`
      }
    FROM monitor.simplificado 
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
};
