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
        return parseInt(integerString) * 1e6 + decimalValue
    }
    return parseInt(numericString) * 1e6;
};
