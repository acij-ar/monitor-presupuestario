module.exports = (rows, params) => {
  const rowsSeries = rows.map((groupRows, groupName) => groupRows.map((itemRows, itemIndex) => {
    const groupParams = params.groups.filter(item => item.group === groupName.toString())[itemIndex];
    const budgetInfo = {
      group: groupName,
      color: ['#AAB9C1', '#D7B6A7'][groupName],
      name: groupParams.actividad_desc || groupParams.programa_desc || groupParams.entidad_desc || groupParams.jurisdiccion_desc,
      years: {},
    }
    itemRows.forEach(({ budget, ejercicio_presupuestario }) => {
      if (!budgetInfo.years[ejercicio_presupuestario]) {
        budgetInfo.years[ejercicio_presupuestario] = 0
      }
      budgetInfo.years[ejercicio_presupuestario] += budget;
    })
    return budgetInfo
  }))
  const categories = params.years;
  const series = [];
  rowsSeries.forEach(groupSeries => groupSeries.forEach(itemSeries => {
    series.push({
      color: itemSeries.color,
      name: itemSeries.name,
      data: categories.map(year => itemSeries.years[year] || 0)
    })
  }))
  return { categories, series };
}
