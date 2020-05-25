const path = require('path');
const dataFolderPath = path.join(__dirname, '..', '..', 'data');
const files = require('./files');
const columns = require('./columns');
const mysqlconfig = require('./mysql');

module.exports = {
  db: {
    path: path.join(dataFolderPath, 'db.sqlite3')
  },
  mysqlconfig : { mysqlconfig },
  datasets: {
    files,
    columns,
  }
};
