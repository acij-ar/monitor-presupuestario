const fs = require('fs');
const csv = require('fast-csv');
const db = require('../../db');

module.exports = ({filePath}) => {
    fs.createReadStream(filePath)
        .pipe(csv.parse({headers: true}))
        .on('data', row => {
            db.sqlite.run(
                'INSERT INTO inflacion(year, inflacion) VALUES(?, ?)',
                [row.ejercicio_presupuestario, row.tasa_ajuste_inflacion],
                (err) => {
                    if (err) throw err;
                }
            )
        })
};
