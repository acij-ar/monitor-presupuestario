/*
MySQL Configuration
 */
require("dotenv").config();


module.exports = {
	host     : process.env['MYSQL_HOST'],
	user     : process.env['MYSQL_USER'],
	port	 : process.env['MYSQL_DOCKER_PORT'],
	password : process.env['MYSQL_PASSWORD'],
	database : process.env['MYSQL_DATABASE']
};
