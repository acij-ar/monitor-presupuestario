const dbConnection = require('../../../data/db/mysql-connection');

const saveDoubt = (entry) => {
  let query;
  if (entry.id) {
    query = `UPDATE faq SET pregunta = ?, respuesta = ? WHERE id = ?`;
    return dbConnection.query(query, [entry.name, entry.content, entry.id]);
  } else {
    query = `INSERT INTO faq (pregunta, respuesta) VALUES (?, ?); `;
    return dbConnection.query(query, [entry.name, entry.content]);
  }
};

const saveTerm = (entry) => {
  let query;
  if (entry.id) {
    query = `UPDATE glosario SET palabra = ?, significado = ? WHERE id = ?`;
    return dbConnection.query(query, [entry.name, entry.content, entry.id]);
  } else {
    query = `INSERT INTO glosario (palabra, significado) VALUES (?, ?); `;
    return dbConnection.query(query, [entry.name, entry.content]);
  }
};

module.exports = { saveDoubt, saveTerm };

