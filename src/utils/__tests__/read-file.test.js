const mockReadFile = jest.fn();
const mockExists = jest.fn();
const mockPromisify = (func) => (func === 'readFile' ? mockReadFile : mockExists);
jest.mock('util', () => ({promisify: mockPromisify}));
jest.mock('fs', () => ({readFile: 'readFile', exists: 'exists'}));

const readFile = require('../read-file');

describe('Read file helper', () => {
  it('should handle non existing files', async () => {
    mockExists.mockReturnValueOnce(Promise.resolve(false));
    const fileContent = await readFile();
    expect(fileContent).toBeNull();
  });

  it('should return the content of the file', async () => {
    mockExists.mockReturnValueOnce(Promise.resolve(true));
    mockReadFile.mockReturnValueOnce(Promise.resolve('file -content'));
    const fileContent = await readFile();
    expect(fileContent).toBe('file -content');
  });
});
