const levenshtein = require('fast-levenshtein');
const normalizeName = require('../../../utils/normalize-name');

module.exports = (targetName, dependencies) => {
  if (dependencies) {
    const normalizedTargetName = normalizeName(targetName.toLowerCase());
    const dependenciesNames = Object.keys(dependencies);
    const literalMatch = dependenciesNames.find(name => normalizeName(name.toLocaleLowerCase()) === normalizedTargetName);
    if (literalMatch) {
      return literalMatch
    }

    for (let tolerance=1; tolerance<5; tolerance++) {
      const fuzzyMatches = dependenciesNames.filter(name => {
        const normalizedName = normalizeName(name.toLocaleLowerCase());
        return levenshtein.get(normalizedName, normalizedTargetName) <= tolerance
      });
      if (fuzzyMatches.length === 1) {
        return fuzzyMatches[0]
      } else if (fuzzyMatches.length > 1) {
        return null
      }
    }
  }
  return null;
};