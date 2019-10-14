const mockClose = jest.fn();

jest.mock('readline', () => ({
  createInterface: () => ({
    question: (questionText, callback) => callback('mocked-input-from-standard-input'),
    close: mockClose,
  })
}));

const readFromStandardInput = require('../read-from-standard-input');

describe('Read from standard input', () => {
  it('should resolve with input from standard input', async (done) => {
    const input = await readFromStandardInput();
    expect(mockClose).toHaveBeenCalledTimes(1);
    expect(input).toBe('mocked-input-from-standard-input');
    done();
  });
});