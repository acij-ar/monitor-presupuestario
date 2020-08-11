module.exports = (setParams, selectedOptions, selectedGroups) => {
  const years = selectedOptions.years.map(({ value }) => value);
  const groups = [
    ...selectedGroups[0].map(({ name, source: { droppableId: type } }) => ({ name, type, group: 0 })),
    ...selectedGroups[1].map(({ name, source: { droppableId: type } }) => ({ name, type, group: 1 })),
  ];
  setParams({
    ...selectedOptions,
    years,
    groups,
  });
}
