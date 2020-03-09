jest.mock('md5-file/promise', () => (filename) => {
  if (filename === 'up-to-date-file') {
    return 'abc123'
  } else if (filename === 'outdated-file') {
    return '890zyx'
  } else {
    throw 'file doesnt exist'
  }
});
const mockCountLines = jest.fn(path => {
  if (path === 'up-to-date-file') {
    return 123
  } else if (path === 'outdated-file') {
    return 234
  } else {
    throw 'Non existing file'
  }
});
jest.mock('../count-lines', () => mockCountLines);
const mockStatSync = jest.fn((path) => {
  if (path === 'up-to-date-file') {
    return { mtime: new Date('2019-01-01 10:01') }
  } else if (path === 'outdated-file') {
    return { mtime: new Date('1999-01-01 10:01') }
  } else {
    throw 'Non existing file'
  }
});
jest.mock('fs', () => ({ statSync: mockStatSync }));

const fileStatus = require('../file-status');

describe('fileStatus method', () => {
  it('should handle up to date files', async (done) => {
    const id = 'id-1';
    const path = 'up-to-date-file';
    const expectedMD5 = 'abc123';
    const status = await fileStatus({ id, path, expectedMD5 });
    expect(status.id).toBe('id-1');
    expect(status.path).toBe('up-to-date-file');
    expect(status.exists).toBeTruthy();
    expect(status.upToDate).toBeTruthy();
    expect(status.lines).toBe(123);
    expect(status.lastModified).toBe('2019-01-01T13:01:00.000Z');
    done();
  });

  it('should handle outdated files', async (done) => {
    const id = 'id-2';
    const path = 'outdated-file';
    const expectedMD5 = 'abc123';
    const status = await fileStatus({ id, path, expectedMD5 });
    expect(status.id).toBe('id-2');
    expect(status.path).toBe('outdated-file');
    expect(status.exists).toBeTruthy();
    expect(status.upToDate).toBeFalsy();
    expect(status.lines).toBe(234);
    expect(status.lastModified).toBe('1999-01-01T13:01:00.000Z');
    done();
  });

  it('should handle files that doesnt exist', async (done) => {
    const id = 'id-3';
    const path = 'file-that-doesnt-exist';
    const expectedMD5 = 'abc123';
    const status = await fileStatus({ id, path, expectedMD5 });
    expect(status.id).toBe('id-3');
    expect(status.path).toBe('file-that-doesnt-exist');
    expect(status.exists).toBeFalsy();
    expect(status.upToDate).toBeFalsy();
    expect(status.lines).toBeNull();
    expect(status.lastModified).toBeNull();
    done();
  });
});
