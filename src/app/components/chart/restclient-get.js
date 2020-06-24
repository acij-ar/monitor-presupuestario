const axios = require('axios');

module.exports = (url, config) => axios.get(url, config).then(({data}) => data);
