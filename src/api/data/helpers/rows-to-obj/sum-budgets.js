const rowParseInt = require('../row-parse-int');

module.exports = (row, obj) => {
  const {budget, original, vigente, devengado} = rowParseInt(row);
  if (budget) obj.budget += budget;
  if (original) obj.original += original;
  if (vigente) obj.vigente += vigente;
  if (devengado) obj.devengado += devengado;
};
