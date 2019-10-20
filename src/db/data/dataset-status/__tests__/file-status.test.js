jest.mock('md5-file/promise', () => (filename) => {
  if (filename === 'up-to-date-file') {
    return 'abc123'
  } else if (filename === 'outdated-file') {
    return '890zyx'
  } else {
    throw 'file doesnt exist'
  }
});

const fileStatus = require('../file-status');

describe('fileStatus method', () => {
  it('should handle up to date files', async (done) => {
    const filePath = 'up-to-date-file';
    const expectedMD5 = 'abc123';
    const status = await fileStatus({ filePath, expectedMD5 });
    expect(status.exists).toBeTruthy();
    expect(status.upToDate).toBeTruthy();
    expect(status.expectedMD5).toBe('abc123');
    expect(status.currentMD5).toBe('abc123');
    done();
  });

  it('should handle outdated files', async (done) => {
    const filePath = 'outdated-file';
    const expectedMD5 = 'abc123';
    const status = await fileStatus({ filePath, expectedMD5 });
    expect(status.exists).toBeTruthy();
    expect(status.upToDate).toBeFalsy();
    expect(status.expectedMD5).toBe('abc123');
    expect(status.currentMD5).toBe('890zyx');
    done();
  });

  it('should handle files that doesnt exist', async (done) => {
    const filePath = 'file-that-doesnt-exist';
    const expectedMD5 = 'abc123';
    const status = await fileStatus({ filePath, expectedMD5 });
    expect(status.exists).toBeFalsy();
    expect(status.upToDate).toBeFalsy();
    expect(status.expectedMD5).toBe('abc123');
    expect(status.currentMD5).toBeNull();
    done();
  });
});
