const transformOptions = require('./transform-options');

module.exports = ({ rawOptions, selected, params, newValues }) => {
  const { year } = newValues;
  if (!year) {
    return {
      newSelected: { ...selected, ...newValues },
      newParams: { ...params, ...newValues },
    }
  }

  const { selectedIds, selectedNames, options } = transformOptions({ rawOptions, year });

  return {
    newSelected: {
      year: newValues.year,
      inflation: selected.inflation,
      budget: selected.budget,
      ...selectedIds,
    },
    newParams: {
      year: newValues.year,
      inflation: params.inflation,
      budget: params.budget,
      ...selectedNames,
    },
    newOptions: options,
  }
};
