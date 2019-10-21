const mockNormalizeName = jest.fn(name => name);
jest.mock('../../../../utils/normalize-name', () => mockNormalizeName);
const processRowIntoObject = require('../process-row-into-object');

describe('Process row into object script', () => {
  afterEach(() => {
    mockNormalizeName.mockClear();
  });

  it('should match final object for first example row', () => {
    const row = {
      jurisdiccion_desc: 'Ministerio de Ambiente',
      entidad_desc: 'Secretaria de nubes',
      programa_desc: 'Interes de lluvia',
      actividad_desc: 'Paraguas para el pueblo',
      credito_presupuestado: 123,
      credito_vigente: 234,
      credito_comprometido: 345,
      credito_devengado: 456,
      credito_pagado: 678,
    };
    const year = 2010;
    const dbObject = {
      credito_presupuestado: 0,
      credito_vigente: 0,
      credito_comprometido: 0,
      credito_devengado: 0,
      credito_pagado: 0,
      credito_original: 0,
      dependencias: {}
    };
    processRowIntoObject({ row, year, dbObject });
    expect(mockNormalizeName.mock.calls).toEqual([['Ministerio de Ambiente'], ['Secretaria de nubes'], ['Interes de lluvia'], ['Paraguas para el pueblo']]);
    expect(dbObject).toEqual({
      credito_presupuestado: 123,
      credito_vigente: 234,
      credito_comprometido: 345,
      credito_devengado: 456,
      credito_pagado: 678,
      credito_original: 123,
      dependencias: {
        'Ministerio de Ambiente': {
          credito_presupuestado: 123,
          credito_vigente: 234,
          credito_comprometido: 345,
          credito_devengado: 456,
          credito_pagado: 678,
          credito_original: 123,
          dependencias: {
            'Secretaria de nubes': {
              credito_presupuestado: 123,
              credito_vigente: 234,
              credito_comprometido: 345,
              credito_devengado: 456,
              credito_pagado: 678,
              credito_original: 123,
              dependencias: {
                'Interes de lluvia': {
                  credito_presupuestado: 123,
                  credito_vigente: 234,
                  credito_comprometido: 345,
                  credito_devengado: 456,
                  credito_pagado: 678,
                  credito_original: 123,
                  dependencias: {
                    'Paraguas para el pueblo': {
                      credito_presupuestado: 123,
                      credito_vigente: 234,
                      credito_comprometido: 345,
                      credito_devengado: 456,
                      credito_pagado: 678,
                      credito_original: 123,
                      dependencias: undefined,
                    }
                  }
                }
              }
            }
          }
        }
      }
    })
  });

  it('should match final object for second example row', () => {
    const row = {
      jurisdiccion_desc: 'Ministerio de tierra',
      entidad_desc: 'Secretaria de llanuras',
      programa_desc: 'Interes de la pampa',
      actividad_desc: 'Vacas para el pueblo',
      credito_presupuestado: 123,
      credito_vigente: 234,
      credito_comprometido: 345,
      credito_devengado: 456,
      credito_pagado: 678,
    };
    const year = 2019;
    const dbObject = {
      credito_presupuestado: 10,
      credito_vigente: 20,
      credito_comprometido: 30,
      credito_devengado: 40,
      credito_pagado: 50,
      credito_original: 60,
      dependencias: {
        'Ministerio de tierra': {
          credito_presupuestado: 10,
          credito_vigente: 20,
          credito_comprometido: 30,
          credito_devengado: 40,
          credito_pagado: 50,
          credito_original: 60,
          dependencias: {},
        }
      }
    };
    processRowIntoObject({ row, year, dbObject });
    expect(mockNormalizeName.mock.calls).toEqual([['Ministerio de tierra'], ['Secretaria de llanuras'], ['Interes de la pampa'], ['Vacas para el pueblo']]);
    expect(dbObject).toEqual({
      credito_presupuestado: 133,
      credito_vigente: 254,
      credito_comprometido: 375,
      credito_devengado: 496,
      credito_pagado: 728,
      credito_original: 60,
      dependencias: {
        'Ministerio de tierra': {
          credito_presupuestado: 133,
          credito_vigente: 254,
          credito_comprometido: 375,
          credito_devengado: 496,
          credito_pagado: 728,
          credito_original: 60,
          dependencias: {
            'Secretaria de llanuras': {
              credito_presupuestado: 123,
              credito_vigente: 234,
              credito_comprometido: 345,
              credito_devengado: 456,
              credito_pagado: 678,
              credito_original: 0,
              dependencias: {
                'Interes de la pampa': {
                  credito_presupuestado: 123,
                  credito_vigente: 234,
                  credito_comprometido: 345,
                  credito_devengado: 456,
                  credito_pagado: 678,
                  credito_original: 0,
                  dependencias: {
                    'Vacas para el pueblo': {
                      credito_presupuestado: 123,
                      credito_vigente: 234,
                      credito_comprometido: 345,
                      credito_devengado: 456,
                      credito_pagado: 678,
                      credito_original: 0,
                      dependencias: undefined,
                    }
                  }
                }
              }
            }
          }
        }
      }
    })
  });
});
