const parseNumericValue = require('../parse-numeric-value');

describe('Parse numeric value', () => {
  it('should handle simple ints', () => {
    expect(parseNumericValue('0')).toBe(0);
    expect(parseNumericValue('1')).toBe(1e6);
    expect(parseNumericValue('2')).toBe(2e6);
    expect(parseNumericValue('10')).toBe(1e7);
    expect(parseNumericValue('50')).toBe(5e7);
    expect(parseNumericValue('100')).toBe(1e8);
    expect(parseNumericValue('1000')).toBe(1e9);
  });

  it('should handle decimal values', () => {
    expect(parseNumericValue('0,123456')).toBe(123456);
    expect(parseNumericValue('1,000001')).toBe(1000001);
    expect(parseNumericValue('0,000001')).toBe(1);
    expect(parseNumericValue('0,0000001')).toBe(0.1);
    expect(parseNumericValue('1,00000001')).toBe(1000000.01);
  });
});
