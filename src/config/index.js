const path = require('path');
const dataFolderPath = path.join(__dirname, '..', '..', 'data');
const files = require('./files');
const columns = require('./columns');

module.exports = {
  db: {
    path: path.join(dataFolderPath, 'db.sqlite3')
  },
  datasets: {
    files,
    columns,
  }
};
