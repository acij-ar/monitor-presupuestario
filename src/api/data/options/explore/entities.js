const fullDetailQuery = require('../../db/full-detail-query');
const rows2obj = require('../../helpers/rows-to-obj');

module.exports = async () => {
  const rows = await fullDetailQuery({ table: 'actividad_mv' })
  return rows2obj(rows, { withIds: true });
};
