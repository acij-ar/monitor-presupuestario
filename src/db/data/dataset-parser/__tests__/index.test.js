const mockDatasetToJSON = jest.fn();
jest.mock('../dataset-to-json', () => mockDatasetToJSON);
jest.mock('../../files', () => [
  { baseDataset: true, hasOriginalBudget: false, id: 1, year: 2019 },
  { baseDataset: false, hasOriginalBudget: true, id: 2, year: 2019 },
  { baseDataset: true, hasOriginalBudget: false, id: 3, year: 2020 },
]);

const datasetParser = require('..');

describe('Dataset parser', () => {
  it('should iterate through each file and call datasetToJSON on them', async (done) => {
    await datasetParser();
    expect(mockDatasetToJSON).toHaveBeenCalledTimes(2);
    expect(mockDatasetToJSON.mock.calls[0][0]).toEqual({ baseFile: {baseDataset: true, hasOriginalBudget: false, id: 1, year: 2019}, originalBudgetFile: { baseDataset: false, hasOriginalBudget: true, id: 2, year: 2019 } });
    expect(mockDatasetToJSON.mock.calls[1][0]).toEqual({ baseFile: {baseDataset: true, hasOriginalBudget: false, id: 3, year: 2020} });
    done();
  });
});