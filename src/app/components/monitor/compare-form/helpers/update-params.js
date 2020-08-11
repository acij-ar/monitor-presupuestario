module.exports = (setParams, selectedOptions, selectedGroups) => {
  const years = selectedOptions.years.map(({ value }) => value);
  const groups = [
    ...selectedGroups[0].map(item => ({ ...item, source: undefined, group: 0 })),
    ...selectedGroups[1].map(item => ({ ...item, source: undefined, group: 1 })),
  ];
  setParams({
    ...selectedOptions,
    years,
    groups,
  });
}
