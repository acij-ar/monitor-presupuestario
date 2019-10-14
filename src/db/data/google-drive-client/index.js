const fs = require('fs');
const driveClient = require('./drive-client');

class GoogleDriveClient {
  async init() {
    this._client = await driveClient();
    console.log('Google drive initialized successfully');
  }

  downloadFile({fileId, outputPath}) {
    console.log(`Downloading ${fileId} to ${outputPath}`);
    const dest = fs.createWriteStream(outputPath);
    const file = {fileId, alt: 'media'};
    const options = {responseType: 'stream'};
    const downloadFilePromiseHandler = (resolve, reject) => {
      const driveClientCallback = (err, res) => {
        if (err) {
          return reject(err);
        }
        res.data
          .on('end', () => {
            console.log(`File ${fileId} downloaded successfully`);
            resolve();
          })
          .on('error', reject)
          .pipe(dest);
      };
      this._client.files.get(file, options, driveClientCallback);
    };
    return new Promise(downloadFilePromiseHandler);
  }

  listFilesInFolder({folderId}) {
    const params = {
      fields: 'files(id, name, md5Checksum)',
      q: `${folderId} in parents`,
    };
    const listFilesInFolderPromiseHandler = (resolve, reject) => {
      const listFilesCallback = (err, res) => (err ? reject(err) : resolve(res.data.files));
      this._client.files.list(params, listFilesCallback);
    };
    return new Promise(listFilesInFolderPromiseHandler);
  }
}

module.exports = GoogleDriveClient;

// 1CwdEQNMpgUvMjL-Cok2n16vT55F2AT52