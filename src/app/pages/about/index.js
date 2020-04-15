const About = require('./view');
const Texts = require('../../../services/texts');

module.exports = (req, res, next) => {
  res.locals.pageName = 'about';
  res.locals.props = { ...Texts.content.about };
  res.locals.View = About;
  next();
};
