const fs = require('fs');
const csv = require('fast-csv');
const db = require('../../db');
const {datasets} = require('../../../config');

const {filePath} = datasets.files.find(({filename}) => filename === 'inflacion.csv');

module.exports = () => (
    new Promise(resolve => {
        fs.createReadStream(filePath)
            .pipe(csv.parse({headers: true}))
            .on('data', row => {
                db.sqlite.run(
                    'INSERT INTO inflacion(year, inflacion) VALUES(?, ?)',
                    [row.ejercicio_presupuestario, row.tasa_ajuste_inflacion]
                )
            })
            .on('end', resolve)
    })
);
