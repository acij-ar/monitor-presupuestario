jest.mock('../../google-drive-client', () => (
  class MockGoogleDriveClient {
    init() {}
    listFilesInFolder() {
      return [{ id: '123', md5Checksum: 'asd' }]
    }
  }
));
const mockFileStatus = { exists: true, upToDate: false };
jest.mock('../file-status', () => async () => mockFileStatus);
jest.mock('../../../../utils/logger', () => ({ info: jest.fn() }));
jest.mock('../files', () => [{ id: '123' }]);

const compareAllFiles = require('../compare-all-files');

describe('Compare all files', () => {
  it('should return file status for each file in drive', async (done) => {
    const fileComparisions = await compareAllFiles();
    expect(fileComparisions).toEqual([{id: '123', exists: true, upToDate: false}]);
    done();
  });
});
