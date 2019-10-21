const normalizeNames = require('../normalize-name');

describe('Normalize names script', () => {
  it('should match examples', () => {
    expect(normalizeNames('')).toBe('');
    expect(normalizeNames('nombre')).toBe('nombre');
    expect(normalizeNames('NOMBRE')).toBe('Nombre');
    expect(normalizeNames('Presidencia de la Nación')).toBe('Presidencia de la Nacion');
    expect(normalizeNames('Presidencia de la  Nación')).toBe('Presidencia de la Nacion');
    expect(normalizeNames('Ministerio de montañas')).toBe('Ministerio de montanas'); // TODO: evitar esto
  })
});