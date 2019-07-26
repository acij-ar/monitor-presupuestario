const csv = require('fast-csv');
const fs = require('fs');
const CSVWriteStream = require('csv-write-stream');

module.exports = ({rawFilePath, cleanedFilePath}) => {
    const not_numeric_columns = [
        'ejercicio_presupuestario',
        'jurisdiccion_desc',
        'entidad_id',
        'entidad_desc',
        'programa_id',
        'programa_desc',
        'actividad_id',
        'actividad_desc'
    ];
    const numeric_columns = [
        'credito_presupuestado',
        'credito_vigente',
        'credito_comprometido',
        'credito_devengado',
        'credito_pagado'
    ];
    const outputStream = fs.createWriteStream(cleanedFilePath);
    const csvWriter = CSVWriteStream({headers: not_numeric_columns.concat(numeric_columns)});
    csvWriter.pipe(outputStream);

    fs.createReadStream(rawFilePath)
        .pipe(csv.parse({headers: true}))
        .on('data', row => {
            csvWriter.write(row);
        })
        .on('end', () => {
            csvWriter.end();
            console.log(`Finished cleaning file ${cleanedFilePath}`);
        });

};
