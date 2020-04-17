const mockDatasetsStats = jest.fn();
jest.mock('../../../../services/dataset-status', () => mockDatasetsStats);
const mockDatasetUpdater = {};
jest.mock('../../../../services/dataset-updater', () => mockDatasetUpdater);

const jobStatusController = require('../job-status');

describe('Job status controller', () => {
  it('should return info from the running process', async () => {
    const mockReq = null;
    const mockRes = { json: jest.fn() };
    mockDatasetUpdater.processing = true;
    mockDatasetUpdater.step = 'some-step';
    await jobStatusController(mockReq, mockRes);
    expect(mockRes.json).toHaveBeenCalledWith({ processing: true, step: 'some-step' });
  });

  it('should return result after the process is done', async () => {
    const mockReq = null;
    const mockRes = { json: jest.fn() };
    mockDatasetUpdater.processing = false;
    mockDatasetUpdater.lastExecution = 'info-about-last-execution'
    mockDatasetsStats.mockReturnValueOnce(Promise.resolve('some-result-of-the-process'));
    await jobStatusController(mockReq, mockRes);
    expect(mockRes.json).toHaveBeenCalledWith({ result: 'some-result-of-the-process', lastExecution: 'info-about-last-execution' });
  });
});
