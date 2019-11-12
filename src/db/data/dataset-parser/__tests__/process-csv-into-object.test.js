const mockReadCSV = jest.fn(() => {});
jest.mock('../../../../utils/read-csv', () => mockReadCSV);
const mockParseRow = jest.fn(() => 'parsed-row');
jest.mock('../parse-row', () => mockParseRow);
const mockProcessRowIntoObject = jest.fn();
jest.mock('../process-row-into-object', () => mockProcessRowIntoObject);

const processCSVIntoObject = require('../process-csv-into-object');

describe('Process CSV into object script', () => {
  afterEach(() => {
    mockReadCSV.mockClear();
    mockParseRow.mockClear();
    mockProcessRowIntoObject.mockClear();
  });

  it('should call process-row-into-object on each row', () => {
    const dbObject = {
      dependencies: {},
      credito_original: 0,
      credito_presupuestado: 0,
    };
    const file = { path: 'file-path', year: 2019, numberUnitsAreMillions: true };
    processCSVIntoObject({ dbObject, file, inflation: 1 });
    expect(mockReadCSV).toHaveBeenCalledTimes(1);
    expect(mockReadCSV.mock.calls[0][0]).toEqual({ path: 'file-path', onData: expect.any(Function) });

    const onDataCallback = mockReadCSV.mock.calls[0][0].onData;
    expect(typeof onDataCallback).toBe('function');
    onDataCallback('mock-row');
    expect(mockParseRow).toHaveBeenCalledTimes(1);
    expect(mockParseRow.mock.calls[0][0]).toEqual({row: 'mock-row', numberUnitsAreMillions: true});
    expect(mockProcessRowIntoObject).toHaveBeenCalledTimes(1);
    expect(mockProcessRowIntoObject.mock.calls).toEqual([[{row: 'parsed-row', dbObject, year: 2019, inflation: 1}]]);
  });
});