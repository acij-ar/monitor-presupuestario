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
            isDefaultTableForSearchSuggestions: true,
            dropOrder: 3,
            singularName: 'jurisdicción',
        },
        {
            name: 'entidades',
            isSearchable: true,
            dropOrder: 2,
            singularName: 'entidad',
        },
        {
            name: 'programas',
            isSearchable: true,
            dropOrder: 1,
            singularName: 'programa',
        },
        {
            name: 'actividades',
            isSearchable: true,
            dropOrder: 0,
            singularName: 'actividad',
        },
    ]
};
