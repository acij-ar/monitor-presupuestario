const mockExistsSync = jest.fn().mockReturnValueOnce(true).mockReturnValueOnce(false);
const mockReadFileSync = jest.fn(() => ('{"token":"from-file"}'));
const mockWriteFileSync = jest.fn();
jest.mock('fs', () => ({
  existsSync: mockExistsSync,
  readFileSync: mockReadFileSync,
  writeFileSync: mockWriteFileSync,
}));

const {getToken, saveToken} = require('../token');

describe('Token utils', () => {
  it('should return token from file when file exists', () => {
    const token = getToken();
    expect(token).toEqual({token: 'from-file'});
  });

  it('should return null when token file doesnt exists', () => {
    const token = getToken();
    expect(token).toBeNull();
  });

  it('should save token to file', () => {
    saveToken({ attr: 'value' });
    expect(mockWriteFileSync.mock.calls[0][1]).toBe('{"attr":"value"}');
  });
});