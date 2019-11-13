const numberRegex = /^\s*\d+([,.]\d+)?\s*$/;

/**
 * Parses string representations of numbers
 *
 * When the numberUnitsAreMillions is used, units are treated as representing millions
 * and the decimal separator is ","
 * Examples for numberUnitsAreMillions = true:
 * "1" is equivalent to 1000000 (1e6)
 * "0,123456" is equivalent to 123456
 * "0,0000001" is equivalent to 0.1
 *
 * @param {string} numericString - String representing a number
 * @param {boolean} [numberUnitsAreMillions] - Flag representing if the numberic units represents millions
 * @returns {number} - Parsed value of the input string
 */
module.exports = (numericString, numberUnitsAreMillions) => {
  if (typeof numericString !== 'string' || !numericString.match(numberRegex)) {
    return 0;
  }

  if (!numberUnitsAreMillions) {
    return parseFloat(numericString)
  }

  if (numericString.includes(',')) {
    const [ integerString, decimalString ] = numericString.split(',');
    let decimalValue;
    if (decimalString.length < 7) {
      const paddedDecimalString = decimalString.padEnd(6, '0');
      decimalValue = parseInt(paddedDecimalString);
    } else {
      decimalValue = parseFloat(`${decimalString.substr(0, 6)}.${decimalString.substr(6, decimalString.length)}`);
    }
    return parseInt(integerString) * 1e6 + decimalValue;
  }
  return parseInt(numericString) * 1e6;
};
