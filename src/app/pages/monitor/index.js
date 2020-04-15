const Monitor = require('./view');
const Texts = require('../../../services/texts');

module.exports = (req, res, next) => {
  res.locals.pageName = 'monitor';
  res.locals.View = Monitor;
  res.locals.props = {...Texts.content.monitor};
  next();
};
