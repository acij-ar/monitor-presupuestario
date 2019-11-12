const mockWriteFileSync = jest.fn();
jest.mock('fs', () => ({
  writeFileSync: mockWriteFileSync
}));
const mockBaseJSONObject = jest.fn(() => ({thisObject: 'base-json-object'}));
jest.mock('../base-json-object', () => mockBaseJSONObject);
const mockProcessCSVIntoObject = jest.fn();
jest.mock('../process-csv-into-object', () => mockProcessCSVIntoObject);

const datasetToJSON = require('../dataset-to-json');

describe('Dataset to json', () => {
  afterEach(() => {
    mockWriteFileSync.mockClear();
    mockBaseJSONObject.mockClear();
    mockProcessCSVIntoObject.mockClear();
  });

  it('should iterate through csv file calling parseRow and processRowIntoObject for each row', async (done) => {
    await datasetToJSON({ files: [{ path: './path/to/file.csv', year: 2019 }], inflationFile: { path: 'inflation.csv' } });
    expect(mockBaseJSONObject).toHaveBeenCalledTimes(1);
    expect(mockProcessCSVIntoObject).toHaveBeenCalledTimes(1);
    expect(mockProcessCSVIntoObject.mock.calls).toEqual([[{file: { path: './path/to/file.csv', year: 2019 }, dbObject: {thisObject: 'base-json-object'}, inflationFile: { path: 'inflation.csv' }}]]);
    expect(mockWriteFileSync).toHaveBeenCalledTimes(1);
    expect(mockWriteFileSync.mock.calls[0][1]).toEqual('{\n  "thisObject": "base-json-object"\n}');
    done();
  });

  it('should handle baseFile and originalBudgetFile', async (done) => {
    await datasetToJSON({ files: [{ path: './path/to/file.csv', year: 2019 }, { path: 'path-to-original-file.csv' }], inflationFile: { path: 'inflation.csv' } });
    expect(mockBaseJSONObject).toHaveBeenCalledTimes(1);
    expect(mockProcessCSVIntoObject).toHaveBeenCalledTimes(2);
    expect(mockProcessCSVIntoObject.mock.calls[0][0]).toEqual({file: { path: './path/to/file.csv', year: 2019 }, dbObject: {thisObject: 'base-json-object'}, inflationFile: { path: 'inflation.csv' }});
    expect(mockProcessCSVIntoObject.mock.calls[1][0]).toEqual({file: { path: 'path-to-original-file.csv' }, dbObject: {thisObject: 'base-json-object'}, inflationFile: { path: 'inflation.csv' }});
    expect(mockWriteFileSync).toHaveBeenCalledTimes(1);
    expect(mockWriteFileSync.mock.calls[0][1]).toEqual('{\n  "thisObject": "base-json-object"\n}');
    done();
  });
});
