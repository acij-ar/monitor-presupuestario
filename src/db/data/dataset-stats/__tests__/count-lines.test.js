const mockCountLinesInFileLib = jest.fn((path, callback) => callback(null, 123));
jest.mock('count-lines-in-file', () => mockCountLinesInFileLib);
const countLines = require('../count-lines');

describe('Count lines', () => {
  it('should return number of lines in file', async (done) => {
    const lines = await countLines('pathToFile');
    expect(lines).toBe(123);
    expect(mockCountLinesInFileLib).toHaveBeenCalledTimes(1);
    expect(mockCountLinesInFileLib.mock.calls[0][0]).toBe('pathToFile');
    done();
  })
});
