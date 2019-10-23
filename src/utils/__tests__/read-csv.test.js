const mockParse = jest.fn();
jest.mock('fast-csv', () => ({ parse: mockParse }));
const mockPipe = jest.fn(() => mockStream);
const mockOn = jest.fn(() => mockStream);
const mockStream = {
  pipe: mockPipe,
  on: mockOn,
};
const mockCreateReadStream = jest.fn(() => mockStream);
jest.mock('fs', () => ({ createReadStream: mockCreateReadStream }));
const readCSV = require('../read-csv');

describe('Read CSV', () => {
  it('should pipe fast-csv dependency with headers=true', () => {
    readCSV({ path: 'some-path', onData: () => {} });
    expect(mockParse).toHaveBeenCalledTimes(1);
    expect(mockParse).toHaveBeenCalledWith({ headers: true });
    expect(mockCreateReadStream).toHaveBeenCalledTimes(1);
    expect(mockCreateReadStream).toHaveBeenCalledWith('some-path');
  });

  it('should call onData with each row', () => {
    const mockOnData = jest.fn();
    readCSV({ path: 'some-path', onData: mockOnData });
    expect(mockOn).toHaveBeenCalledWith('data', mockOnData);
  });
});