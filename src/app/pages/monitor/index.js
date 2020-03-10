const Monitor = require('./view');
const Texts = require('../../../services/texts');

module.exports = (req, res, next) => {
  res.locals.View = Monitor;
  const {title, description} = Texts.content.monitor;
  res.locals.props = {title, description};
  res.locals.scripts = [res.locals.assetPath('monitor.js')];
  res.locals.styles = [res.locals.assetPath('monitor.css')];
  next();
};
