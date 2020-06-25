const genericQuery = require('../helpers/query');
const rows2obj = require('../helpers/rows-to-obj');

module.exports = async (req, res, next) => {
  try {
    const rows = await genericQuery({ ... req.query, budget: 'all' });
    const obj = rows2obj(req.query, rows);
    const response = Object.values(obj.children).map(({ name, original, vigente, devengado }) => ({ name, original, vigente, devengado }));
    res.json(response);
  } catch (e) {
    next(e);
  }
};

