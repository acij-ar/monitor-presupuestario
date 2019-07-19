const data = require('./treemap-data.json');

const treemap = (req, res, next) => {
  res.locals.props = {
    treemapData: data
  };
  next();
};

module.exports = treemap;
