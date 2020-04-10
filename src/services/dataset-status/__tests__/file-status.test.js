const mockReadFile = jest.fn();
jest.mock('../../../utils/read-file', () => mockReadFile);
jest.mock('../../../utils/logger', () => ({ error: jest.fn(), info: jest.fn() }));
const mockStatSync = jest.fn();
jest.mock('fs', () => ({ statSync: mockStatSync }));

const fileStatus = require('../file-status');

describe('fileStatus method', () => {
  beforeEach(() => {
    mockReadFile.mockClear();
  });

  it('should handle up to date files', async (done) => {
    mockStatSync.mockReturnValueOnce({ mtime: new Date('2019-01-01 10:01') });
    mockReadFile.mockReturnValueOnce('abc123');
    const status = await fileStatus({
      id: 'id-1',
      path: 'up-to-date-file.csv',
      md5Path: 'up-to-date-file.csv.md5',
      expectedMD5: 'abc123',
    });
    expect(status.id).toBe('id-1');
    expect(status.path).toBe('up-to-date-file.csv');
    expect(status.md5Path).toBe('up-to-date-file.csv.md5');
    expect(status.exists).toBeTruthy();
    expect(status.upToDate).toBeTruthy();
    expect(status.lastModified).toBe('2019-01-01T13:01:00.000Z');
    done();
  });

  it('should handle outdated files', async (done) => {
    mockStatSync.mockReturnValueOnce({ mtime: new Date('1999-01-01 10:01') });
    mockReadFile.mockReturnValueOnce('qwe456');
    const status = await fileStatus({
      id: 'id-2',
      path: 'outdated-file.csv',
      md5Path: 'outdated-file.csv.md5',
      expectedMD5: 'abc123',
    });
    expect(status.id).toBe('id-2');
    expect(status.path).toBe('outdated-file.csv');
    expect(status.md5Path).toBe('outdated-file.csv.md5');
    expect(status.exists).toBeTruthy();
    expect(status.upToDate).toBeFalsy();
    expect(status.lastModified).toBe('1999-01-01T13:01:00.000Z');
    done();
  });

  it('should handle files that doesnt exist', async (done) => {
    const id = 'id-3';
    const path = 'file-that-doesnt-exist';
    const md5Path = 'file-that-doesnt-exist';
    const expectedMD5 = 'abc123';
    const status = await fileStatus({ id, path, md5Path, expectedMD5 });
    expect(status.id).toBe('id-3');
    expect(status.path).toBe('file-that-doesnt-exist');
    expect(status.exists).toBeFalsy();
    expect(status.upToDate).toBeFalsy();
    expect(status.lastModified).toBeNull();
    done();
  });
});
