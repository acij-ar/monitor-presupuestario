const path = require('path');
const dataFolderPath = path.join(__dirname, '..', '..', 'data');

module.exports = {
    path: path.join(dataFolderPath, 'db.sqlite3'),
    tables: [
        {
            name: 'años',
            isSearchable: false,
        },
        {
            name: 'jurisdicciones',
            isSearchable: true,
        },
        {
            name: 'entidades',
            isSearchable: true,
        },
        {
            name: 'programas',
            isSearchable: true,
        },
        {
            name: 'actividades',
            isSearchable: true,
        },
    ]
};
