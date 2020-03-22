const mockCompareAllFiles = jest.fn();
jest.mock('../../dataset-status', () => mockCompareAllFiles);
const mockMD5 = jest.fn();
jest.mock('md5-file/promise', () => mockMD5);
const mockWriteFileSync = jest.fn();
jest.mock('fs', () => ({ writeFileSync: mockWriteFileSync }));
const mockDownloadFile = jest.fn();
const mockInit = jest.fn();
jest.mock('../../google-drive-client', () => (
  class MockGoogleDrive {
    init() { mockInit() }
    downloadFile(...args) { return mockDownloadFile(...args) }
  }
));
const mockErrorLogger = jest.fn();
jest.mock('../../../utils/logger', () => ({ info: jest.fn(), error: mockErrorLogger }));

const updateFiles = require('../update-files');

describe('Dataset updater', () => {
  afterEach(() => {
    mockDownloadFile.mockClear();
    mockInit.mockClear();
    mockMD5.mockClear();
    mockWriteFileSync.mockClear();
  });

  it('should download outdated datasets', async () => {
    mockCompareAllFiles.mockReturnValueOnce([{
      upToDate: false,
      filename: 'filename.csv',
      id: 'abc123',
      path: '/path/to/file.csv',
      md5Path: '/path/to/file.csv.md5'
    }]);
    mockMD5.mockReturnValueOnce('md5-mock-hash');
    await updateFiles();
    expect(mockInit).toHaveBeenCalledTimes(1);
    expect(mockDownloadFile).toHaveBeenCalledTimes(1);
    expect(mockMD5).toHaveBeenCalledWith('/path/to/file.csv');
    expect(mockWriteFileSync).toHaveBeenCalledWith('/path/to/file.csv.md5', 'md5-mock-hash');
  });

  it('should log errors', async () => {
    mockCompareAllFiles.mockReturnValueOnce([{
      upToDate: false,
    }]);
    mockDownloadFile.mockImplementationOnce(() => {throw 'some-error'} );
    await updateFiles();
    expect(mockErrorLogger).toHaveBeenCalledWith('some-error');
  });

  it('should do nothing when all datasets are updated', async () => {
    mockCompareAllFiles.mockReturnValueOnce([{upToDate: true}]);
    await updateFiles();
    expect(mockInit).toHaveBeenCalledTimes(0);
    expect(mockDownloadFile).toHaveBeenCalledTimes(0);
  });
});
