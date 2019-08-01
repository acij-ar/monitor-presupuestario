const {datasets} = require('../../config');
const availableDatasets = datasets.files;
const fs = require('fs');
const csv = require('fast-csv');
const db = require('../db');

const updateBudgetTables = ({filePath}) => {
};

const updateInflationTable = ({filePath}) => {
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

module.exports = () => {
    availableDatasets.map(dataset => {
        if (dataset.isYearDataset) {
            updateBudgetTables(dataset)
        } else {
            updateInflationTable(dataset)
        }
    })
};

module.exports();