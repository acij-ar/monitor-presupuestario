module.exports = (setParams, selectedOptions, selectedGroups) => {
  setParams({
    ...selectedOptions,
    years: selectedOptions.years.map(({ value }) => value),
    groups: selectedGroups.map(group => group.map(({ name, source: { droppableId: type } }) => ({ name, type }))),
  });
}
