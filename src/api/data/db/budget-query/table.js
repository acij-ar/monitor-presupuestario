module.exports = (params) => (
  params.activity || params.actividad_desc ? 'actividad_mv' :
    params.program || params.programa_desc ? 'programa_mv' :
      params.entity || params.entidad_desc ? 'entidad_mv' :
        params.jurisdiction || params.jurisdiccion_desc ? 'jurisdiccion_mv' :
          'ejercicio_presupuestario_mv'
)
