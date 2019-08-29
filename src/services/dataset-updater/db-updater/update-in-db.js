const entityTypes = ['presupuesto', 'jurisdiccion', 'entidad', 'programa', 'actividad'];
const updateInDB = ({jsonDB, year, yearInflation, statements, parentId = 0, entityTypeIndex = 0, ancestors = []}) => {
    const {searchEntity, insertEntity, insertBudget, searchRelationship, insertRelationship} = statements;
    const entityType = entityTypes[entityTypeIndex];

    Object.keys(jsonDB).map(entityName => {
        const result = searchEntity.get(entityName, parentId);
        let id;
        if (!result) {
            const {lastInsertRowid} = insertEntity.run(entityName, entityType, parentId);
            id = lastInsertRowid;
        } else {
            id = result.id;
        }
        let {credito_presupuestado, credito_vigente, credito_comprometido, credito_devengado, credito_pagado,
            credito_original, credito_original_posiblemente_modificado, dependencias} = jsonDB[entityName];
        credito_presupuestado *= yearInflation;
        credito_vigente *= yearInflation;
        credito_comprometido *= yearInflation;
        credito_devengado *= yearInflation;
        credito_pagado *= yearInflation;
        credito_original *= yearInflation;
        credito_original_posiblemente_modificado = credito_original_posiblemente_modificado ? 1 : 0;
        insertBudget.run(id, year, credito_presupuestado, credito_vigente, credito_comprometido, credito_devengado,
            credito_pagado, credito_original, credito_original_posiblemente_modificado);
        const parentIds = ancestors.concat([id]);
        parentIds.map(parentId => {
            const result = searchRelationship.get(parentId, id);
            if (!result) {
                insertRelationship.run(parentId, id)
            }
        });
        if (dependencias) {
            updateInDB({
                jsonDB: dependencias,
                year,
                yearInflation,
                statements,
                parentId: id,
                entityTypeIndex: entityTypeIndex + 1,
                ancestors: parentIds,
            })
        }
    });
};

module.exports = updateInDB;
