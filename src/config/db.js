const path = require('path');
const dataFolderPath = path.join(__dirname, '..', '..', 'data');

module.exports = {
    path: path.join(dataFolderPath, 'db.sqlite3'),
    tables: [
        {
            name: 'años',
            isSearchable: false,
            dropOrder: 4,
            parentTable: null,
            childTable: 'jurisdicciones',
        },
        {
            name: 'jurisdicciones',
            isSearchable: true,
            isDefaultTableForSearchSuggestions: true,
            dropOrder: 3,
            singularName: 'jurisdicción',
            parentTable: 'años',
            childTable: 'entidades',
        },
        {
            name: 'entidades',
            isSearchable: true,
            dropOrder: 2,
            singularName: 'entidad',
            parentTable: 'jurisdicciones',
            childTable: 'programas',
        },
        {
            name: 'programas',
            isSearchable: true,
            dropOrder: 1,
            singularName: 'programa',
            parentTable: 'entidades',
            childTable: 'actividades',
        },
        {
            name: 'actividades',
            isSearchable: true,
            dropOrder: 0,
            singularName: 'actividad',
            parentTable: 'programas',
            childTable: null,
        },
    ]
};
