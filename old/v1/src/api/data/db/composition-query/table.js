module.exports = (params) => (
    params.program || params.programa_desc ? 'actividad_mv' :
      params.entity || params.entidad_desc ? 'programa_mv' :
        params.jurisdiction || params.jurisdiccion_desc ? 'entidad_mv' :
          'jurisdiccion_mv'
)
