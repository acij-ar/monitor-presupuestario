const mockDownloadDatasets = jest.fn();
jest.mock('../update-files', () => mockDownloadDatasets);


describe('Dataset updater script', () => {
  it('should call and execute the dataset updater methods', () => {
    require('../download-datasets');
    expect(mockDownloadDatasets).toHaveBeenCalledTimes(1);
  });
});
