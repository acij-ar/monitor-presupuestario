const genericQuery = require('../helpers/query');
const transformRows = require('./transform-rows');

module.exports = async (req, res, next) => {
  try {
    const rows = await genericQuery({ ... req.query, activity: null, budget: 'all' });
    const response = transformRows(rows, req.query);
    res.json(response);
  } catch (e) {
    next(e);
  }
};

