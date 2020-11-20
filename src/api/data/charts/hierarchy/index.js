const compositionQuery = require('../../db/composition-query');
const rows2obj = require('../../helpers/rows-to-obj');

module.exports = async (req, res, next) => {
  try {
    const rows = await compositionQuery({ ...req.query, activity: null });
    const maxDepth = req.query.activity || req.query.program ? 4 :
      req.query.entity ? 3 : req.query.jurisdiction ? 2 : 1
    res.locals.response = rows2obj(rows, { withBudgets: false, withIds: true, maxDepth });
    next();
  } catch (e) {
    next(e);
  }
};
