const mockDatasetToJSON = jest.fn();
jest.mock('../dataset-to-json', () => mockDatasetToJSON);
jest.mock('../../files', () => [
  { baseDataset: true, id: 1 },
  { baseDataset: false, id: 2 },
  { baseDataset: true, id: 3 },
]);
const datasetParser = require('..');

describe('Dataset parser', () => {
  it('should iterate through each file and call datasetToJSON on them', async (done) => {
    await datasetParser();
    expect(mockDatasetToJSON.mock.calls[0][0]).toEqual({ baseDataset: true, id: 1 });
    expect(mockDatasetToJSON.mock.calls[1][0]).toEqual({ baseDataset: true, id: 3 });
    done();
  });
});