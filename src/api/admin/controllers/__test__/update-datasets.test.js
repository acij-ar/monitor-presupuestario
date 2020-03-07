const mockDatasetUpdater = jest.fn();
jest.mock('../../../../services/dataset-updater', () => ({ updateDatasets: mockDatasetUpdater }));

const updateDatasetsController = require('../update-datasets');

describe('Update datasets controller', () => {
  it('should start the update process', () => {
    const mockReq = null;
    const mockRes = { json: jest.fn() };
    updateDatasetsController(mockReq, mockRes);
    expect(mockRes.json).toHaveBeenCalledWith({ job_status: 'started' });
    expect(mockDatasetUpdater).toHaveBeenCalledTimes(1);
  });
});
