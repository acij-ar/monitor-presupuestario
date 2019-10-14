const fs = require('fs');
const driveClient = require('./drive-client');

class GoogleDriveClient {
  async init() {
    this.client = await driveClient();
  }

  downloadFile({fileId, outputPath}) {
    console.log(`Downloading ${fileId} to ${outputPath}`);
    const dest = fs.createWriteStream(outputPath);
    return new Promise((resolve, reject) => {
      this.client.files.get(
        {fileId, alt: 'media'},
        {responseType: 'stream'},
        (err, res) => {
          if (err) {
            throw err;
          }
          res.data
            .on('end', () => {
              console.log(`File ${fileId} downloaded successfully`);
              resolve();
            })
            .on('error', reject)
            .pipe(dest);
        }
      );
    });
  }
}

const googleDriveClient = new GoogleDriveClient;
googleDriveClient.init();

module.exports = googleDriveClient;

// client.client.files.list({ fields: 'files(id, name, md5Checksum)', q: '\'1CwdEQNMpgUvMjL-Cok2n16vT55F2AT52\' in parents' }, (err, res) => { console.log(res.data.files); });