const stripDiacritics = require('./strip-diacritics');

const cache = {};

const processString = label => {
  const str = label.toString();
  if (cache[str]) {
    return cache[str];
  }
  const processedString = stripDiacritics(str.toLowerCase().replace(/^\s+|\s+$/g, ''));
  cache[str] = processedString;
  return processedString;
}

const customFilter = (option, rawInput) => {
  const input = processString(rawInput)
  const candidate = processString(option.label);
  return candidate.indexOf(input) > -1;
}

const initFiltersForOptions = (options) => options && options.length && setTimeout(() => {
  options.forEach(option => processString(option.label));
}, 100)

module.exports = {
  customFilter,
  initFiltersForOptions,
}
