const getYears = require('../years');
const getEntities = require('./entities');
const convertToOption = require('../convert-to-option');


module.exports = async (req, res) => {
  const [entities, years] = await Promise.all([getEntities(), getYears()]);
  const options = {
    budgets: ['Original', 'Vigente', 'Devengado'].map(convertToOption),
    inflation: ['Ajustado', 'Sin ajustar'].map(convertToOption),
    entities,
    years,
  }
  res.json(options);
};
