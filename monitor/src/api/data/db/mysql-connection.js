const mysql = require('mysql2/promise');
const {mysqlconfig: {mysqlconfig}} = require('../../../config');

const dbConnection = mysql.createPool(mysqlconfig);
console.log(mysqlconfig)
module.exports = dbConnection;

