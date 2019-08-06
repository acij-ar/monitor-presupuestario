const loadInflationDataset = require('../load-inflation-dataset');
const db = require('../../../db');

const baseColumns = [
    'name', 'year', 'credito_presupuestado', 'credito_vigente', 'credito_comprometido',
    'credito_devengado', 'credito_pagado', 'credito_presupuestado_ajustado', 'credito_vigente_ajustado',
    'credito_comprometido_ajustado', 'credito_devengado_ajustado', 'credito_pagado_ajustado',
];

class InsertWithInflation {
    async init() {
        this.inflation = await loadInflationDataset();
    }

    insert({tableName, extraColumns = [], object}) {
        const columns = [...extraColumns, ...baseColumns];
        const insertColumns = columns.join(', ');
        const objectWithInflation = this.calculateInflationColumns(object);
        const values = columns.map(column => objectWithInflation[column]);
        const placeholders = values.map(() => '?').join(', ');
        return db.sqlite.run(`INSERT INTO ${tableName}(${insertColumns}) VALUES(${placeholders})`, values)
    }

    calculateInflationColumns(object) {
        const inflationRate = this.inflation[object.year];
        const budgetColumns = [
            'credito_presupuestado', 'credito_vigente', 'credito_comprometido', 'credito_devengado', 'credito_pagado'
        ];
        budgetColumns.map(column => {
            object[`${column}_ajustado`] = (object[column] || 0) * inflationRate;
        });
        return object
    }
}

module.exports = new InsertWithInflation;