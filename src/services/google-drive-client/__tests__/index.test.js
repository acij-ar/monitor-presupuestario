const mockCreateWriteStream = jest.fn();
jest.mock('fs', () => ({
  createWriteStream: mockCreateWriteStream,
}));

const { EventEmitter } = require('events');
const mockGet = jest.fn((file, options, callback) => {
  const mockEvent = new EventEmitter();
  mockEvent.pipe = () => {};
  if (file.fileId === 'file-id-that-sucess') {
    callback(null, {data: mockEvent});
    mockEvent.emit('end');
  } else {
    callback('some-error');
  }
});
const mockList = jest.fn((params, callback) => {
  if (params.q.includes('folder-id-that-sucess')) {
    const mockResponse = {data:{files: ['file1', 'file2']}};
    callback(null, mockResponse);
  } else {
    callback('some-error');
  }
});
const mockClient = jest.fn(() => ({
  files: {
    get: mockGet,
    list: mockList,
  }
}));
jest.mock('../drive-client', () => mockClient);

const GoogleDriveClient = require('..');

describe('Google drive client', () => {
  afterEach(() => {
    mockCreateWriteStream.mockClear();
  });

  it('should initialize with client', async (done) => {
    const client = new GoogleDriveClient;
    await client.init();
    expect(client._client).toEqual({ files: { get: mockGet, list: mockList} });
    done();
  });

  it('should return promise that resolves into downloaded file', async (done) => {
    const client = new GoogleDriveClient;
    await client.init();
    client.downloadFile(({ fileId: 'file-id-that-sucess', outputPath: '/tmp/some-file.json' }))
      .then(() => {
        expect(mockCreateWriteStream).toHaveBeenCalledTimes(1);
        expect(mockCreateWriteStream.mock.calls[0][0]).toBe('/tmp/some-file.json');
        done();
      });
  });

  it('should return promise that rejects when file cant be downloaded', async (done) => {
    const client = new GoogleDriveClient;
    await client.init();
    client.downloadFile(({ fileId: 'file-id-that-errors', outputPath: '/tmp/some-file.json' }))
      .catch((error) => {
        expect(error).toBe('some-error');
        done();
      });
  });

  it('should return promise that resolves into folder list', async (done) => {
    const client = new GoogleDriveClient;
    await client.init();
    client.listFilesInFolder(({ folderId: 'folder-id-that-sucess' }))
      .then((response) => {
        expect(response).toEqual(['file1', 'file2']);
        done();
      });
  });

  it('should return promise that rejects when folder cant be listed', async (done) => {
    const client = new GoogleDriveClient;
    await client.init();
    client.listFilesInFolder(({ folderId: 'folder-id-that-errors' }))
      .catch((error) => {
        expect(error).toBe('some-error');
        done();
      });
  });
});
