const db = require('..');
const resultsToListForSelect = require('../../helpers/results-to-list-for-select');

// TODO: save this results. Reset them only after db-update

module.exports = () => {
  const results = db.prepare('SELECT year, name, entity_type, entidades.id AS id FROM entidades JOIN presupuestos ON entidades.id = entity_id WHERE entity_type = \'jurisdiccion\' ORDER BY year DESC').all();
  return resultsToListForSelect({results});
};