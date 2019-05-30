const axios = require('axios');

const treemap = (req, res, next) => {
    const years = [
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
    ];

    const baseUrl = 'http://monitorpresupuestario.acij.org.ar/api/v1/jurisdiccion?anio=';
    const promises = years.map(year => axios.get(`${baseUrl}${year}`));
    Promise.all(promises)
        .then((responses) => {
            const data = {};
            years.map((year, index) => {
                data[year] = responses[index].data
            });
            res.locals.props = {
                treemapData: data
            };
            next();
        })
        .catch((err) => next(err));
};

module.exports = treemap;