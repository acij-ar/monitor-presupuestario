const axios = require('axios');
const years = require('../helpers/available-years');

const treemap = (req, res, next) => {
    const baseUrl = 'http://monitorpresupuestario.acij.org.ar/api/v1/jurisdiccion?anio=';
    const promises = years.map(year => axios.get(`${baseUrl}${year}`));
    Promise.all(promises)
        .then((responses) => {
            const data = {};
            years.map((year, index) => {
                data[year] = responses[index].data.map(({ jurisdiccion_desc: name, ...data }) => ({ name, ...data }));
            });
            res.locals.props = {
                treemapData: data
            };
            next();
        })
        .catch((err) => next(err));
};

module.exports = treemap;
