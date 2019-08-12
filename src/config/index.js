const path = require('path');
const files = require('./files');
const columns = require('./columns');

const dataFolderPath = path.join(__dirname, '..', '..', 'data');

module.exports = {
    db: {
        path: path.join(dataFolderPath, 'db.sqlite3'),
    },
    datasets: {
        files,
        columns,
    }
};
