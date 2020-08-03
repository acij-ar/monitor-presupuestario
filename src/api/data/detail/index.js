const selectionDetail = require('./selection-detail');
const wholeBudgetDetail = require('./whole-budget-detail');

module.exports = async (req, res, next) => {
  try {
    const totalBudget = await wholeBudgetDetail({
      inflation: req.query.inflation,
      budget: req.query.budget,
      year: req.query.year,
    });
    const response = req.query.jurisdiction ? await selectionDetail(req.query, totalBudget) : totalBudget
    res.json(response);
  } catch (e) {
    next(e);
  }
};
