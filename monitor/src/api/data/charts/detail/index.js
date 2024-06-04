const selectionDetail = require('./selection-detail');
const budgetQuery = require('../../db/budget-query');

module.exports = async (req, res, next) => {
  try {
    const [{ budget: total }] = await budgetQuery({
      inflation: req.query.inflation,
      budget: req.query.budget,
      year: req.query.year,
    });
    const totalBudget = { total };
    res.locals.response = req.query.jurisdiction ? await selectionDetail(req.query, totalBudget) : totalBudget
    next();
  } catch (e) {
    next(e);
  }
};
