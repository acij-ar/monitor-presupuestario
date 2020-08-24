module.exports = (params) => (
  params.activity || params.actividad_desc ? 'monitor.actividad_mv' :
    params.program || params.programa_desc ? 'monitor.programa_mv' :
      params.entity || params.entidad_desc ? 'monitor.entidad_mv' :
        params.jurisdiction || params.jurisdiccion_desc ? 'monitor.jurisdiccion_mv' :
          'monitor.ejercicio_presupuestario_mv'
)
