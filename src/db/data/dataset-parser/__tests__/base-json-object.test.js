const baseJSONObject = require('../base-json-object');

describe('Base json object', () => {
  it('should match schema', () => {
    const baseObject = baseJSONObject();
    const expectedObject = {
      dependencias: {},
      credito_presupuestado: 0,
      credito_vigente: 0,
      credito_comprometido: 0,
      credito_devengado: 0,
      credito_pagado: 0,
      credito_original: 0,
    };
    expect(baseObject).toEqual(expectedObject);
  })
});
