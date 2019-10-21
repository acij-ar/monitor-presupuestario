/**
 * Parses string representations of numbers where each unit represents a million
 * and the decimal separator is ","
 * Examples:
 * "1" is equivalent to 1000000 (1e6)
 * "0,123456" is equivalent to 123456
 * "0,0000001" is equivalent to 0.1
 *
 * @param {string} numericString - String representing a number
 * @returns {number} - Parsed value of the input string
 */
module.exports = (numericString) => {
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
