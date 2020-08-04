const getYears = require('../years');
const getEntities = require('./entities');
const convertToOption = require('../convert-to-option');


module.exports = async (req, res) => {
  const [entities, years] = await Promise.all([getEntities(), getYears()]);
  res.locals.response = {
    budgets: ['Original', 'Vigente', 'Devengado'].map(convertToOption),
    inflation: ['Ajustado', 'Sin ajustar'].map(convertToOption),
    entities,
    years,
  }
  next();
};
