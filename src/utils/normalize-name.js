const _ = require('lodash');

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = (name) => {
  const deburredName = _.deburr(name.replace(/\s\s+/g, ' '));
  if (deburredName.toUpperCase() === deburredName) {
    const lowerCaseName = deburredName.toLowerCase();
    return capitalizeFirstLetter(lowerCaseName)
  }
  return deburredName;
};
