const path = require('path');
const dataFolderPath = path.join(__dirname, '..', '..', 'data');

module.exports = {
    path: path.join(dataFolderPath, 'db.sqlite3'),
    tables: [
        {
            name: 'años',
            isSearchable: false,
            dropOrder: 4,
        },
        {
            name: 'jurisdicciones',
            isSearchable: true,
            dropOrder: 3,
        },
        {
            name: 'entidades',
            isSearchable: true,
            dropOrder: 2,
        },
        {
            name: 'programas',
            isSearchable: true,
            dropOrder: 1,
        },
        {
            name: 'actividades',
            isSearchable: true,
            dropOrder: 0,
        },
    ]
};
