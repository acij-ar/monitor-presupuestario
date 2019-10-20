const mockDownloadDatasets = jest.fn();
jest.mock('..', () => mockDownloadDatasets);


describe('Dataset updater script', () => {
  it('should call and execute the dataset updater methods', () => {
    require('../download-datasets');
    expect(mockDownloadDatasets).toHaveBeenCalledTimes(1);
  });
});
