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
            primaryKeyForParent: null,
            childTable: 'jurisdicciones',
            primaryKeyForChild: 'año_id',
        },
        {
            name: 'jurisdicciones',
            isSearchable: true,
            isDefaultTableForSearchSuggestions: true,
            dropOrder: 3,
            singularName: 'jurisdicción',
            parentTable: 'años',
            primaryKeyForParent: null,
            childTable: 'entidades',
            primaryKeyForChild: 'jurisdiccion_id',
        },
        {
            name: 'entidades',
            isSearchable: true,
            dropOrder: 2,
            singularName: 'entidad',
            parentTable: 'jurisdicciones',
            primaryKeyForParent: 'entidad_id',
            childTable: 'programas',
            primaryKeyForChild: 'entidad_id',
        },
        {
            name: 'programas',
            isSearchable: true,
            dropOrder: 1,
            singularName: 'programa',
            parentTable: 'entidades',
            primaryKeyForParent: 'jurisdiccion_id',
            childTable: 'actividades',
            primaryKeyForChild: 'actividad_id',
        },
        {
            name: 'actividades',
            isSearchable: true,
            dropOrder: 0,
            singularName: 'actividad',
            parentTable: 'programas',
            primaryKeyForParent: 'programa_id',
            childTable: null,
            primaryKeyForChild: null,
        },
    ]
};
