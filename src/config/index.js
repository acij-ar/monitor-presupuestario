const files = require('./files');
const columns = require('./columns');
const db = require('./db');

module.exports = {
  db,
  datasets: {
    files,
    columns,
  }
};
