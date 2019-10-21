const mockWriteFileSync = jest.fn();
jest.mock('fs', () => ({
  writeFileSync: mockWriteFileSync
}));
const mockReadCSV = jest.fn(({onData}) => onData('mock-row'));
jest.mock('../../../../utils/read-csv', () => mockReadCSV);
const mockBaseJSONObject = jest.fn(() => ({thisObject: 'base-json-object'}));
jest.mock('../base-json-object', () => mockBaseJSONObject);
const mockParseRow = jest.fn(row => row);
jest.mock('../parse-row', () => mockParseRow);
const mockProcessRowIntoObject = jest.fn();
jest.mock('../process-row-into-object', () => mockProcessRowIntoObject);
const mockLoadOriginalBudgetToJSON = jest.fn();
jest.mock('../load-original-budget', () => mockLoadOriginalBudgetToJSON);

const datasetToJSON = require('../dataset-to-json');

describe('Dataset to json', () => {
  afterEach(() => {
    mockWriteFileSync.mockClear();
    mockReadCSV.mockClear();
    mockBaseJSONObject.mockClear();
    mockParseRow.mockClear();
    mockProcessRowIntoObject.mockClear();
    mockLoadOriginalBudgetToJSON.mockClear();
  });

  it('should iterate through csv file calling parseRow and processRowIntoObject for each row', async (done) => {
    await datasetToJSON({ baseFile: { path: './path/to/file.csv', year: 2019 } });
    expect(mockBaseJSONObject).toHaveBeenCalledTimes(1);
    expect(mockReadCSV).toHaveBeenCalledTimes(1);
    expect(mockParseRow).toHaveBeenCalledTimes(1);
    expect(mockParseRow.mock.calls).toEqual([['mock-row']]);
    expect(mockProcessRowIntoObject).toHaveBeenCalledTimes(1);
    expect(mockProcessRowIntoObject.mock.calls).toEqual([[{row: 'mock-row', year: 2019, dbObject: {thisObject: 'base-json-object'}}]]);
    expect(mockWriteFileSync).toHaveBeenCalledTimes(1);
    expect(mockWriteFileSync.mock.calls[0][1]).toEqual('{\n  "thisObject": "base-json-object"\n}');
    expect(mockLoadOriginalBudgetToJSON).toHaveBeenCalledTimes(0);
    done();
  });

  it('should handle baseFile and originalBudgetFile', async (done) => {
    await datasetToJSON({ baseFile: { path: './path/to/file.csv', year: 2019 }, originalBudgetFile: { path: 'path-to-original-file.csv' } });
    expect(mockBaseJSONObject).toHaveBeenCalledTimes(1);
    expect(mockReadCSV).toHaveBeenCalledTimes(1);
    expect(mockParseRow).toHaveBeenCalledTimes(1);
    expect(mockParseRow.mock.calls).toEqual([['mock-row']]);
    expect(mockProcessRowIntoObject).toHaveBeenCalledTimes(1);
    expect(mockProcessRowIntoObject.mock.calls).toEqual([[{row: 'mock-row', year: 2019, dbObject: {thisObject: 'base-json-object'}}]]);
    expect(mockWriteFileSync).toHaveBeenCalledTimes(1);
    expect(mockWriteFileSync.mock.calls[0][1]).toEqual('{\n  "thisObject": "base-json-object"\n}');
    expect(mockLoadOriginalBudgetToJSON).toHaveBeenCalledTimes(1);
    expect(mockLoadOriginalBudgetToJSON.mock.calls[0][0]).toEqual({ dbObject: {thisObject: 'base-json-object'}, year: 2019, path: 'path-to-original-file.csv' });
    done();
  });
});
