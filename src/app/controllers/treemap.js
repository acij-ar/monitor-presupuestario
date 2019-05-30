const axios = require('axios');
const _ = require('lodash');

const treemap = (req, res, next) => {
    axios.get('http://monitorpresupuestario.acij.org.ar/api/v1/jurisdiccion?anio=2018')
        .then(({ data }) => {
            res.locals.props = { data: _.sortBy(data, p => -p['credito_vigente']) };
            next();
        })
        .catch((err) => next(err));
};

module.exports = treemap;