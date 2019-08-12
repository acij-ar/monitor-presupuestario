module.exports = [
    {
        name: 'ejercicio_presupuestario',
        isNumeric: false,
    },
    {
        name: 'jurisdiccion_id',
        isNumeric: false,
    },
    {
        name: 'jurisdiccion_desc',
        isCategory: true,
        categoryLevel: 0,
        isNumeric: false,
    },
    {
        name: 'entidad_id',
        isNumeric: false,
    },
    {
        name: 'entidad_desc',
        isCategory: true,
        categoryLevel: 1,
        isNumeric: false,
    },
    {
        name: 'programa_id',
        isNumeric: false,
    },
    {
        name: 'programa_desc',
        isCategory: true,
        categoryLevel: 2,
        isNumeric: false,
    },
    {
        name: 'actividad_id',
        isNumeric: false,
    },
    {
        name: 'actividad_desc',
        isCategory: true,
        categoryLevel: 3,
        isNumeric: false,
    },
    {
        name: 'credito_presupuestado',
        isNumeric: true,
    },
    {
        name: 'credito_vigente',
        isNumeric: true,
    },
    {
        name: 'credito_comprometido',
        isNumeric: true,
    },
    {
        name: 'credito_devengado',
        isNumeric: true,
    },
    {
        name: 'credito_pagado',
        isNumeric: true,
    },
];
