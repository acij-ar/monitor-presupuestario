const loadInflationDataset = require('../load-inflation-dataset');
const db = require('../../../db');

const baseColumns = [
    'name', 'year', 'credito_presupuestado', 'credito_vigente', 'credito_comprometido', 'credito_original',
    'credito_devengado', 'credito_pagado', 'credito_presupuestado_ajustado', 'credito_vigente_ajustado',
    'credito_comprometido_ajustado', 'credito_devengado_ajustado', 'credito_pagado_ajustado',
    'credito_original_ajustado', 'credito_original_posiblemente_modificado',
];

class InsertWithInflation {
    async init() {
        this.inflation = await loadInflationDataset();
        this.statements = {};
    }

    getStatement({tableName, columns}) {
        if (this.statements[tableName]) {
            return this.statements[tableName]
        }
        const insertColumns = columns.join(', ');
        const placeholders = columns.map(() => '?').join(', ');
        const statement = db.sqlite.prepare(`INSERT INTO ${tableName}(${insertColumns}) VALUES(${placeholders})`);
        this.statements[tableName] = statement;
        return statement
    }

    insert({tableName, extraColumns = [], object}) {
        object.credito_original_posiblemente_modificado = object.credito_original_posiblemente_modificado ? 1 : 0;
        const columns = [...extraColumns, ...baseColumns];
        const objectWithInflation = this.calculateInflationColumns(object);
        const values = columns.map(column => objectWithInflation[column]);
        return this.getStatement({tableName, columns}).run(values)
    }

    calculateInflationColumns(object) {
        const inflationRate = this.inflation[object.year];
        const budgetColumns = [
            'credito_presupuestado', 'credito_vigente', 'credito_comprometido', 'credito_devengado', 'credito_pagado', 'credito_original'
        ];
        budgetColumns.map(column => {
            object[`${column}_ajustado`] = (object[column] || 0) * inflationRate;
        });
        return object
    }
}

module.exports = new InsertWithInflation;