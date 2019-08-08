module.exports = (numericString) => {
    if (numericString.includes(',')) {
        const [ integerString, decimalString ] = numericString.split(',');
        const decimalValue = parseFloat(`0.${decimalString}`) * 1e6;
        return parseInt(integerString) * 1e6 + Math.floor(decimalValue)
    }
    return parseInt(numericString) * 1e6;
};
