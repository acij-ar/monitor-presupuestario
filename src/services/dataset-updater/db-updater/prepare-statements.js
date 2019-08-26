const db = require('../../db');

module.exports = () => {
    const searchEntity = db.prepare('SELECT id FROM entidades WHERE name = ? AND parent_id = ?');
    const insertEntity = db.prepare('INSERT INTO entidades (name,entity_type,parent_id) VALUES(?,?,?)');
    const insertBudget = db.prepare(`INSERT INTO presupuestos(entity_id, year, credito_presupuestado,
            credito_vigente,credito_comprometido,credito_devengado,credito_pagado,credito_original,
            credito_original_posiblemente_modificado) VALUES(?,?,?,?,?,?,?,?,?)`);
    return {
        searchEntity,
        insertEntity,
        insertBudget,
    }
};
