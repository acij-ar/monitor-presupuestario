const mockParseNumericValue = jest.fn(() => 'parsed-numeric-value');
jest.mock('../parse-numeric-value', () => mockParseNumericValue);

const parseRow = require('../parse-row');

describe('Parse row', () => {
  it('should call parse-numeric-value on each numeric column of the rows', () => {
    const mockRow = {
      credito_presupuestado: '123',
      credito_vigente: '234',
      credito_comprometido: '345',
      credito_devengado: '456',
      credito_pagado: '567',
    };
    const newRow = parseRow(mockRow);
    expect(newRow.credito_presupuestado).toBe('parsed-numeric-value');
    expect(newRow.credito_vigente).toBe('parsed-numeric-value');
    expect(newRow.credito_comprometido).toBe('parsed-numeric-value');
    expect(newRow.credito_devengado).toBe('parsed-numeric-value');
    expect(newRow.credito_pagado).toBe('parsed-numeric-value');
    expect(mockParseNumericValue.mock.calls).toEqual([['123'], ['234'], ['345'], ['456'], ['567']]);
  });
});
