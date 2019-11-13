const mockParseNumericValue = jest.fn((string, numberUnitsAreMillions) => {
  if (string === '') {
    return 0
  } else if (numberUnitsAreMillions) {
    return parseFloat(string.replace(',', '.')) * 1e6
  }
  return parseFloat(string)
});
jest.mock('../parse-numeric-value', () => mockParseNumericValue);

const parseRow = require('../parse-row');

describe('Parse row', () => {
  it('should handle rows from hacienda', () => {
    const mockRow = {
      jurisdiccion_desc: 'nombre jurisdiccion',
      entidad_desc: 'entidad nombre',
      programa_desc: 'programa',
      actividad_desc: 'actividad_',
      credito_presupuestado: '123,123',
      credito_vigente: '234',
      credito_comprometido: '345,444',
      credito_devengado: '456',
      credito_pagado: '567',
    };

    const newRow = parseRow({
      row: mockRow,
      numberUnitsAreMillions: true,
      usePresupuestadoAsOriginal: true,
      inflation: 2,
      filename: 'filename.csv',
      rowIndex: 123,
    });
    expect(newRow).toEqual({
      raw: {
        jurisdiccion_desc: 'nombre jurisdiccion',
        entidad_desc: 'entidad nombre',
        programa_desc: 'programa',
        actividad_desc: 'actividad_',
        credito_presupuestado: '123,123',
        credito_vigente: '234',
        credito_comprometido: '345,444',
        credito_devengado: '456',
        credito_pagado: '567',
      },
      parsed: {
        adjusted: {
          aumento: 0,
          comprometido: 690888000,
          devengado: 912000000,
          original: 246246000,
          originalConAumento: 246246000,
          pagado: 1134000000,
          presupuestado: 246246000,
          vigente: 468000000,
        },
        marcarHijosConPosibleReasignacion: false,
        origin:  {
          filename: 'filename.csv',
          inflation: 2,
          rowIndex: 123,
        },
        pen:  {
          actividad: 'actividad_',
          entidad: 'entidad nombre',
          jurisdiccion: 'nombre jurisdiccion',
          programa: 'programa',
        },
        unadjusted:  {
          aumento: 0,
          comprometido: 345444000,
          devengado: 456000000,
          original: 123123000,
          originalConAumento: 123123000,
          pagado: 567000000,
          presupuestado: 123123000,
          vigente: 234000000,
        },
      },
    });
  });

  it('should handle rows from presupuesto-original', () => {
    const mockRow = {
      jurisdiccion: 'nombre jurisdiccion',
      entidad: 'entidad nombre',
      programa: 'programa',
      actividad: 'actividad_',
      credito_original: '123',
      aumento: '345'
    };

    const newRow = parseRow({
      row: mockRow,
      numberUnitsAreMillions: false,
      usePresupuestadoAsOriginal: false,
      inflation: 2,
      filename: 'filename.csv',
      rowIndex: 123,
    });
    expect(newRow).toEqual({
      raw: {
        jurisdiccion: 'nombre jurisdiccion',
        entidad: 'entidad nombre',
        programa: 'programa',
        actividad: 'actividad_',
        credito_original: '123',
        aumento: '345'
      },
      parsed: {
        adjusted: {
          aumento: 690,
          comprometido: 0,
          devengado: 0,
          original: 246,
          originalConAumento: 936,
          pagado: 0,
          presupuestado: 0,
          vigente: 0,
        },
        marcarHijosConPosibleReasignacion: false,
        origin:  {
          filename: 'filename.csv',
          inflation: 2,
          rowIndex: 123,
        },
        pen:  {
          actividad: 'actividad_',
          entidad: 'entidad nombre',
          jurisdiccion: 'nombre jurisdiccion',
          programa: 'programa',
        },
        unadjusted:  {
          aumento: 345,
          comprometido: 0,
          devengado: 0,
          original: 123,
          originalConAumento: 468,
          pagado: 0,
          presupuestado: 0,
          vigente: 0,
        },
      },
    });
  });
});
