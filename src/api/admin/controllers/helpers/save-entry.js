const MYSQLConnection = require('../../../data/helpers/query/mysql-connection');

const saveDoubt = (entry) => {
  const db_connection = MYSQLConnection();
  let query;
  if (entry.id) {
    query = `UPDATE faq SET pregunta = ?, respuesta = ? WHERE id = ?`;
    return db_connection.promise().query(query, [entry.name, entry.content, entry.id]);
  } else {
    query = `INSERT INTO faq (pregunta, respuesta) VALUES (?, ?); `;
    return db_connection.promise().query(query, [entry.name, entry.content]);
  }
};

const saveTerm = (entry) => {
  const db_connection = MYSQLConnection();
  let query;
  if (entry.id) {
    query = `UPDATE glosario SET palabra = ?, significado = ? WHERE id = ?`;
    return db_connection.promise().query(query, [entry.name, entry.content, entry.id]);
  } else {
    query = `INSERT INTO glosario (palabra, significado) VALUES (?, ?); `;
    return db_connection.promise().query(query, [entry.name, entry.content]);
  }
};

module.exports = { saveDoubt, saveTerm };

