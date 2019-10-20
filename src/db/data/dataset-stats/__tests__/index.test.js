jest.mock('../../files', () => [
  {path: 'path-to-existing-file', id: '123abc'},
  {path: 'path-to-non-existing-file', id: '890xyz'},
]);
const mockStatSync = jest.fn(filePath => {
  if (filePath === 'path-to-existing-file') {
    return { mtime: new Date('2019-01-01 10:01') }
  }
  throw 'Non existing file';
});
jest.mock('fs', () => ({ statSync: mockStatSync }));
jest.mock('../count-lines.js', () => () => 123);
const datasetStats = require('..');

describe('Dataset stats', () => {
  it('should return stats of existing file and handle non existing files', async (done) => {
    const stats = await datasetStats();
    expect(stats).toEqual([
      {
        path: 'path-to-existing-file',
        id: '123abc',
        lastModified: 'Tue Jan 01 2019 10:01:00 GMT-0300 (Argentina Standard Time)',
        lines: 123,
      },
      {
        path: 'path-to-non-existing-file',
        id: '890xyz',
        lastModified: null,
        lines: null,
      }
    ]);
    done();
  });
});
