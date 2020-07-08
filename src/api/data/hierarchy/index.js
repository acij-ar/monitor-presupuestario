const genericQuery = require('../helpers/query');
const rows2obj = require('../helpers/rows-to-obj');

module.exports = async (req, res, next) => {
  try {
    const rows = await genericQuery({ ...req.query, activity: null, budget: null });
    const maxDepth = req.query.activity || req.query.program ? 4 :
      req.query.entity ? 3 : req.query.jurisdiction ? 2 : 1
    const response = rows2obj(rows, { withBudgets: false, withIds: true, maxDepth });
    res.json(response);
  } catch (e) {
    next(e);
  }
};
