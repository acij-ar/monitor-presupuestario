const genericQuery = require('../helpers/query');
const transformRows = require('./transform-rows');

module.exports = async (req, res, next) => {
  try {
    const rowsData = await genericQuery({ ... req.query, activity: null, budget: 'all' });
    const rows = transformRows(rowsData, req.query);
    const haderName = req.query.program ? 'Actividad' : req.query.entity ? 'Programa' : req.query.jurisdiction ? 'Entidad' : 'Jurisdicción';
    res.json({
      rows,
      header: { name: haderName }
    });
  } catch (e) {
    next(e);
  }
};

