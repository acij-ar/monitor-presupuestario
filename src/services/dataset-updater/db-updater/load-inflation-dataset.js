const fs = require('fs');
const csv = require('fast-csv');
const {datasets} = require('../../../config');

const {filePath} = datasets.files.find(({filename}) => filename === 'inflacion.csv');

module.exports = () => {
    const inflation = {};
    return new Promise(resolve => {
        fs.createReadStream(filePath)
            .pipe(csv.parse({headers: true}))
            .on('data', row => {
                inflation[row.ejercicio_presupuestario] = parseFloat(row.tasa_ajuste_inflacion);
            })
            .on('end', () => resolve(inflation))
    })
};
