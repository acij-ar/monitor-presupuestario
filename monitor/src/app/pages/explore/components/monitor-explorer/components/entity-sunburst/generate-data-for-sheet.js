module.exports = (chartData, params) => {
  const header = ['Año', 'Jurisdicción', 'Entidad', 'Programa', 'Actividad', 'Presupuesto'];
  const hierarchy = {};
  const rows = [];

  const getRow = (dataPoint, obj={}) => {
    const { id, parent, name } = dataPoint;
    const pointType = header[id.match(/_/g).length - 1];
    obj[pointType] = name;
    hierarchy[id] = dataPoint;
    const parentObj = hierarchy[parent];
    if (parentObj) {
      return getRow(parentObj, obj)
    }
    return obj;
  }

  if (chartData) {
    const { series: [{ data }] } = chartData;
    data.map(dataPoint => {
      rows.push({
        'Año': params.year,
        'Presupuesto': dataPoint.value,
        ...getRow(dataPoint),
      });
    })
  }
  return [rows, {header}]
};
