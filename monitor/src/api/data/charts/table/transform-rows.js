module.exports = (rows, params) => {
  const detailLevel = params.program || params.activity ? 'actividad_desc' :
    params.entity ? 'programa_desc' :
      params.jurisdiction ? 'entidad_desc' : 'jurisdiccion_desc';

  const total = { name: 'Total', original: 0, vigente: 0, devengado: 0 };
  const response = rows.map(row => {
    console.log(row)
    const name = row[detailLevel];
    const {original, vigente, devengado} = row;
    let reasignado = (vigente / original - 1) * 100;
    let ejecucion = (devengado / vigente) * 100;

    console.log(name)
    console.log(reasignado)
    console.log(ejecucion)
    console.log(vigente)
    console.log(original)

    ejecucion = (vigente <= 0 || devengado <= 0) ? 0 : ejecucion
    reasignado = (original <= 1 || vigente <= 0) ? 0 : reasignado
    total.original += original;
    total.vigente += vigente;
    total.devengado += devengado;
    return {name, original, vigente, devengado, ejecucion, reasignado};
  });

  total.reasignado = (total.vigente / total.original - 1) * 100;
  total.ejecucion = (total.devengado / total.vigente) * 100;
  return {rows: response, total };
};
