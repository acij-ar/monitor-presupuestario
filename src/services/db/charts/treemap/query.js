const db = require('../..');
const availableYears = require('../../../../app/pages/monitor/helpers/available-years');
const availableBudgets = require('../../../../app/pages/monitor/helpers/available-budgets');

module.exports = ({selectedYear, selectedBudget, selectedEntity}) => {
    const year = (selectedYear || availableYears[0]).label;
    const {value: budgetValue, label: budgetName, color} = (selectedBudget || availableBudgets[0]);
    const entity = (selectedEntity || {name: 'Presupuesto total', id: 1});

    const data = db.prepare(`
        SELECT presupuestos.${budgetValue} AS value, entidades.name AS name, entidades.id AS tableId, entidades.parent_id as parentId 
        FROM presupuestos 
        JOIN relaciones ON relaciones.child_id = presupuestos.entity_id
        JOIN entidades ON presupuestos.entity_id = entidades.id 
        WHERE relaciones.parent_id = ? AND presupuestos.year = ?
    `).all(entity.id, year);
    const name = `${entity.name} - ${year} ${budgetName}`;

    const tree = {};
    const getId = (row) => {
        const { tableId, parentId } = row;
        if (tableId === entity.id) {
            row.id = `id_${entity.id}`;
        } else {
            row.id = `${tree[parentId].id}_${tableId}`;
            row.parent = tree[parentId].id;
        }
        delete row.tableId;
        delete row.parentId;
        tree[tableId] = row;
    };
    data.map(getId);
    return {name, data, color};
};
