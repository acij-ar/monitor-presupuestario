const stripDiacritics = require('./strip-diacritics');

const cache = {};

const processString = str => {
  if (cache[str]) {
    return cache[str];
  }
  const processedString = stripDiacritics(str.toLowerCase().replace(/^\s+|\s+$/g, ''));
  cache[str] = processedString;
  return processedString;
}

module.exports = (option, rawInput) => {
  const input = processString(rawInput)
  const candidate = processString(option.label);
  return candidate.indexOf(input) > -1;
}
