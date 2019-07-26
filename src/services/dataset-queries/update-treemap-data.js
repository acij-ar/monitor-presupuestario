const availableDatasets = require('../available-datasets');
const datasetColumns = require('../dataset-columns');
const csv = require('fast-csv');
const path = require('path');
const fs = require('fs');

const numericColumns = datasetColumns.filter(column => column.isNumeric).map(column => column.name);

const extractData = ({ filename }) => {
    const datasetPath = path.join(__dirname, '..', '..', '..', 'data', 'cleaned', filename);
    const yearData = {};
    if (!fs.existsSync(datasetPath)) {
        return Promise.resolve(null)
    }
    return new Promise(resolve => {
        fs.createReadStream(datasetPath)
            .pipe(csv.parse({headers: true}))
            .on('data', row => {
                if (!yearData[row['jurisdiccion_desc']]) {
                    yearData[row['jurisdiccion_desc']] = {
                        name: row['jurisdiccion_desc'],
                        ejercicio_presupuestario: row['ejercicio_presupuestario'],
                    };
                    numericColumns.map(columnName => {
                        yearData[row['jurisdiccion_desc']][columnName] = 0;
                    })
                }
                numericColumns.map(columnName => {
                    yearData[row['jurisdiccion_desc']][columnName] += parseInt(row[columnName]);
                })
            })
            .on('end', () => resolve(Object.values(yearData)));

    })
};

module.exports = () => {
    const promises = availableDatasets.filter(dataset => dataset.isYearDataset).map(extractData);
    Promise.all(promises).then(yearData => {
        const outputJson = {};
        yearData.map(data => {
            if (yearData) {
                outputJson[data[0]['ejercicio_presupuestario']] = data;
            }
        });
        const outputPath = path.join(__dirname, 'treemap-data.json');
        fs.writeFileSync(outputPath, JSON.stringify(outputJson, null, 2));
    })
};