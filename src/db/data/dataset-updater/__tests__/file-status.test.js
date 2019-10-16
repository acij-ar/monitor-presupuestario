jest.mock('md5-file/promise', () => (filename) => {
  if (filename === 'up-to-date-file') {
    return 'abc123'
  } else if (filename === 'outdated-file') {
    return '890zyx'
  } else {
    throw 'file doesnt exist'
  }
});
jest.mock('path', () => ({
  join: (...args) => args[args.length-1],
}));

const fileStatus = require('../file-status');

describe('fileStatus method', () => {
  it('should handle up to date files', async (done) => {
    const filename = 'up-to-date-file';
    const expectedMD5 = 'abc123';
    const status = await fileStatus({ filename, expectedMD5 });
    expect(status.exists).toBeTruthy();
    expect(status.upToDate).toBeTruthy();
    done();
  });

  it('should handle outdated files', async (done) => {
    const filename = 'outdated-file';
    const expectedMD5 = 'abc123';
    const status = await fileStatus({ filename, expectedMD5 });
    expect(status.exists).toBeTruthy();
    expect(status.upToDate).toBeFalsy();
    done();
  });

  it('should handle files that doesnt exist', async (done) => {
    const filename = 'file-that-doesnt-exist';
    const expectedMD5 = 'abc123';
    const status = await fileStatus({ filename, expectedMD5 });
    expect(status.exists).toBeFalsy();
    expect(status.upToDate).toBeFalsy();
    done();
  });
});
