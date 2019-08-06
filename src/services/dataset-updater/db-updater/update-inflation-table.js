const loadInflationDataset = require('./load-inflation-dataset');
const db = require('../../db');

module.exports = async () => {
    const inflation = await loadInflationDataset();
    const insertPromises = Object.keys(inflation).map(year => (
        db.sqlite.run(
            'INSERT INTO inflacion(year, inflacion) VALUES(?, ?)',
            [year, inflation[year]]
        )
    ));
    return Promise.all(insertPromises)
};
