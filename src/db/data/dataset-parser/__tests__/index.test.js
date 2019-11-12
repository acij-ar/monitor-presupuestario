const mockDatasetToJSON = jest.fn();
jest.mock('../dataset-to-json', () => mockDatasetToJSON);
jest.mock('../../files', () => [
  { id: 1, year: 2019 },
  { id: 2, year: 2019 },
  { id: 3, year: 2020 },
  { id: 4, inflation: true },
]);

const datasetParser = require('..');

describe('Dataset parser', () => {
  it('should iterate through each file and call datasetToJSON on them', async (done) => {
    await datasetParser();
    expect(mockDatasetToJSON).toHaveBeenCalledTimes(2);
    expect(mockDatasetToJSON.mock.calls[0][0]).toEqual({ files: [{id: 1, year: 2019}, { id: 2, year: 2019 }], inflationFile: { id: 4, inflation: true } });
    expect(mockDatasetToJSON.mock.calls[1][0]).toEqual({ files: [{id: 3, year: 2020}], inflationFile: { id: 4, inflation: true } });
    done();
  });
});