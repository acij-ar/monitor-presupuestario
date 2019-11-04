const files = require('../files');

describe('Files config', () => {
  it('should be an array of file objects', () => {
    expect(Array.isArray(files)).toBeTruthy();
    files.map(file => {
      expect(typeof file.id).toBe('string');
      expect(typeof file.path).toBe('string');
      expect(typeof file.filename).toBe('string');
      expect(typeof file.baseDataset).toBe('boolean');
      expect(typeof file.hasOriginalBudget).toBe('boolean');
    })
  })
});