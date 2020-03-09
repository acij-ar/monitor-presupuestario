const parseNumericValue = require('../parse-numeric-value');

describe('parseNumericValue util', () => {
  it('should match examples', () => {
    expect(parseNumericValue('1')).toBe(1e6);
    expect(parseNumericValue('1,1')).toBe(1.1e6);
    expect(parseNumericValue('0')).toBe(0);
    expect(parseNumericValue('1,234567')).toBe(1234567);
    expect(parseNumericValue('1,2345678')).toBe(1234567.8);
    expect(parseNumericValue('1,000000')).toBe(1e6);
  })
});