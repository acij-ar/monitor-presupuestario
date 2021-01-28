const axios = require('axios');
const moment = require('moment');
const fs = require('fs');
const path = require('path');
const admzip = require('adm-zip');
const csv = require('@fast-csv/parse');
const mysql = require('mysql2/promise');
const {mysqlconfig: {mysqlconfig}} = require('../../config');

//
const dataFolderPath = path.join(__dirname, '..', '..','..', 'data/');

const current_year = moment().year();
console.log(current_year);

const dataSourceZip = 'https://www.presupuestoabierto.gob.ar/datasets/'+current_year+'/credito-anual-'+current_year+'.zip';

//mysql connection
const dbConnection = mysql.createPool(mysqlconfig);


(async function() {

	
	//descarga
	console.log("Descargando dataset...");
	await downloadFile(dataSourceZip, dataFolderPath+current_year+'.zip');
	
	//descomprime el zip descargado
	console.log("Descomprimiendo...");
	let zip = new admzip(dataFolderPath+current_year+'.zip');
	zip.extractAllTo(dataFolderPath);

	//eliminar los registros de las tablas de la base de datos
	console.log('Limpiando datos anteriores...');
	var result = await dbConnection.query('CALL clean_data(?);', current_year);

	//lee CSV
	console.log("Procesando CSV...")

	fs.createReadStream(dataFolderPath+'credito-anual-'+current_year+'.csv')
    .pipe(csv.parse({ headers: true, discardUnmappedColumns : true }))
    .on('error', error => {
    	console.error("Woops");
    })
    .on('data', async function(data) {

    	if( isNaN(parseInt(data.ejercicio_presupuestario)) || isNaN(parseFloat(data.credito_presupuestado)) ){
    		console.log("Error en CSV");
    		console.log(data);
    	} else {
    		

    		var row = {
		    	ejercicio_presupuestario: parseInt(data.ejercicio_presupuestario),
		    	jurisdiccion_desc: data.jurisdiccion_desc,
		    	entidad_desc: data.entidad_desc,
		    	programa_desc: data.programa_desc,
		    	actividad_desc: data.actividad_desc,
		    	funcion_desc: data.funcion_desc,
		    	credito_presupuestado: data.credito_presupuestado.replace(',','.'),
		    	credito_presupuestado_infl: data.credito_presupuestado.replace(',','.'),
		    	credito_vigente: data.credito_vigente.replace(',','.'),
		    	credito_vigente_infl: data.credito_vigente.replace(',','.'),
		    	credito_devengado: data.credito_devengado.replace(',','.'),
		    	credito_devengado_infl: data.credito_devengado.replace(',','.')
    		}

    		var result = await dbConnection.query('INSERT INTO monitor.presupuesto SET ?;', row).catch(function() {
    			console.log(data);
    			console.log("Error insertando registro en DB");
    		});
    	}

    })
    .on('end', async function(rowCount) {
    	
    	console.log('Líneas procesadas: '+rowCount);
    	
    	console.log('Multiplicador...');
		var result = await dbConnection.query('CALL multiplier(?);', current_year);

		console.log('Materializando vistas...');
		result = await dbConnection.query('CALL materializer(?);', current_year);

		console.log('Ajuste de inflación...');
		result = await dbConnection.query('CALL inflation_adjust_year(?);', current_year);

		console.log("-- FIN --");

		//no finaliza el proceso, lo matamos
		process.exit(1);
    });


})();



/*
Descarga de archivos
 */
async function downloadFile(fileUrl, outputLocationPath) {
  const writer = fs.createWriteStream(outputLocationPath);

  return axios({
    method: 'get',
    url: fileUrl,
    responseType: 'stream',
  }).then(response => {

    //ensure that the user can call `then()` only when the file has
    //been downloaded entirely.

    return new Promise((resolve, reject) => {
      response.data.pipe(writer);
      let error = null;
      writer.on('error', err => {
        error = err;
        writer.close();
        reject(err);
      });
      writer.on('close', () => {
        if (!error) {
          resolve(true);
        }
        //no need to call the reject here, as it will have been called in the
        //'error' stream;
      });
    });
  });
}