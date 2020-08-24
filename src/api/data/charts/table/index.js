const compositionQuery = require('../../db/composition-query');
const transformRows = require('./transform-rows');

module.exports = async (req, res, next) => {
  try {
    const rowsData = await compositionQuery({ ... req.query, activity: null, budget: 'all' });
    const rows = transformRows(rowsData, req.query);
    const haderName = req.query.program ? 'Actividad' : req.query.entity ? 'Programa' : req.query.jurisdiction ? 'Entidad' : 'Jurisdicción';
    res.locals.response = {
      rows,
      header: { name: haderName }
    };
    next();
  } catch (e) {
    next(e);
  }
};

