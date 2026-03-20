const query = require('./query');

module.exports = async (req, res, next) => {
  try {
    const rows = await query(req.query);
    res.locals.response = { modified: rows.some(row => row.modificado) };
    next();
  } catch (e) {
    next(e);
  }
};

