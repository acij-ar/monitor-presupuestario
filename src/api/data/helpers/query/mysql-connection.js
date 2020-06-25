const mysql = require('mysql2');
const {mysqlconfig: {mysqlconfig}} = require('../../../../config');

module.exports = () => {
  let db_connection = mysql.createConnection(mysqlconfig);
  db_connection.connect();
  return db_connection
}
