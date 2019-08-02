const db = require('..');

const queries = [
    'SELECT DISTINCT year, name, id FROM jurisdicciones;',
    'SELECT DISTINCT year, name, id FROM entidades;'
];

module.exports = () => {
    const entitiesPromises = queries.map(query => (
        new Promise(resolve => {
            db.sqlite.all(query, (err, result) => {
                if (err) throw err;
                resolve(result);
            })
        })
    ));
    return Promise.all(entitiesPromises);
};
