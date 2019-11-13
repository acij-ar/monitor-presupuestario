const parseNumericValue = require('../parse-numeric-value');

describe('Parse numeric value', () => {
  it('should handle simple ints when units are millions', () => {
    expect(parseNumericValue('0', true)).toBe(0);
    expect(parseNumericValue('1', true)).toBe(1e6);
    expect(parseNumericValue('2', true)).toBe(2e6);
    expect(parseNumericValue('10', true)).toBe(1e7);
    expect(parseNumericValue('50', true)).toBe(5e7);
    expect(parseNumericValue('100', true)).toBe(1e8);
    expect(parseNumericValue('1000', true)).toBe(1e9);
  });

  it('should handle decimal values when units are millions', () => {
    expect(parseNumericValue('0,123456', true)).toBe(123456);
    expect(parseNumericValue('1,000001', true)).toBe(1000001);
    expect(parseNumericValue('0,000001', true)).toBe(1);
    expect(parseNumericValue('0,0000001', true)).toBe(0.1);
    expect(parseNumericValue('1,00000001', true)).toBe(1000000.01);
  });

  it('should handle non numeric strings', () => {
    expect(parseNumericValue('abc')).toBe(0);
    expect(parseNumericValue('123abc')).toBe(0);
    expect(parseNumericValue('abc123')).toBe(0);
    expect(parseNumericValue('')).toBe(0);
    expect(parseNumericValue(',^^%')).toBe(0);
  });

  it('should handle common float strings', () => {
    expect(parseNumericValue('1')).toBe(1);
    expect(parseNumericValue('2')).toBe(2);
    expect(parseNumericValue('123.456')).toBe(123.456);
    expect(parseNumericValue('10.10')).toBe(10.1);
  });
});
