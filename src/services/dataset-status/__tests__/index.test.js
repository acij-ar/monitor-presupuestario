jest.mock('../../google-drive-client', () => (
  class MockGoogleDriveClient {
    init() {}
    listFilesInFolder() {
      return [{ id: '123', md5Checksum: 'asd' }]
    }
  }
));
const mockFileStatus = jest.fn();
jest.mock('../file-status', () => mockFileStatus);
jest.mock('../../../utils/logger', () => ({ info: jest.fn() }));
jest.mock('../../../config/files', () => [{ id: '123', path: 'path/to/file', filename: 'filename.csv' }]);

const compareAllFiles = require('..');

describe('Compare all files', () => {
  it('should return file status for each file in drive', async (done) => {
    mockFileStatus.mockReturnValueOnce(Promise.resolve({ exists: true, upToDate: false }));
    const fileComparisions = await compareAllFiles();
    expect(fileComparisions).toEqual([{id: '123', exists: true, upToDate: false, path: 'path/to/file', filename: 'filename.csv'}]);
    expect(mockFileStatus).toHaveBeenCalledWith({id: '123', expectedMD5: 'asd', path: 'path/to/file', filename: 'filename.csv'});
    done();
  });
});
