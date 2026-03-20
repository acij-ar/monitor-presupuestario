const mysql = require('mysql2/promise');
const {mysqlconfig: {mysqlconfig}} = require('../../../config');

const dbConnection = mysql.createPool(mysqlconfig);
module.exports = dbConnection;

