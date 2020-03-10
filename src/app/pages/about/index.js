const About = require('./view');
const Texts = require('../../../services/texts');

module.exports = (req, res, next) => {
  res.locals.props = { ...Texts.content.about };
  res.locals.View = About;
  res.locals.scripts = [res.locals.assetPath('about.js')];
  res.locals.styles = [res.locals.assetPath('about.css')];
  next();
};
