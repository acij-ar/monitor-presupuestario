const mockCompareAllFiles = jest.fn()
  .mockReturnValueOnce([{upToDate: false, filename: 'filename.csv', id: 'abc123'}])
  .mockReturnValueOnce([{upToDate: true}]);
jest.mock('../../dataset-status', () => mockCompareAllFiles);

const mockDownloadFile = jest.fn();
const mockInit = jest.fn();
jest.mock('../../google-drive-client', () => (
  class MockGoogleDrive {
    init() { mockInit() }
    downloadFile(...args) { return mockDownloadFile(...args) }
  }
));
jest.mock('../../../../utils/logger', () => ({ info: jest.fn() }));

const datasetUpdater = require('..');

describe('Dataset updater', () => {
  afterEach(() => {
    mockDownloadFile.mockClear();
    mockInit.mockClear();
  });

  it('should download outdated datasets', async (done) => {
    await datasetUpdater();
    expect(mockInit).toHaveBeenCalledTimes(1);
    expect(mockDownloadFile).toHaveBeenCalledTimes(1);
    done();
  });

  it('should do nothing when all datasets are updated', async (done) => {
    await datasetUpdater();
    expect(mockInit).toHaveBeenCalledTimes(0);
    expect(mockDownloadFile).toHaveBeenCalledTimes(0);
    done();
  });
});
