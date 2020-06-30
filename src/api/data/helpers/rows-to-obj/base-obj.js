const merge = require('lodash/merge');

module.exports = (initialValues, withBudget) => merge(
  {},
  {children: []},
  withBudget ? {budget: 0, original: 0, vigente: 0, devengado: 0} : {},
  initialValues,
);
