const selectionDetail = require('./selection-detail');
const wholeBudgetDetail = require('./whole-budget-detail');

module.exports = async (req, res, next) => {
  try {
    const totalBudget = await  wholeBudgetDetail({ budget: req.query.budget, ejercicio: req.query.ejercicio });
    const response = req.query.jurisdiction ? await selectionDetail(req.query, totalBudget) : totalBudget
    res.json(response);
    res.json();
  } catch (e) {
    next(e);
  }
};
