const fs = require('fs');
const readFromStandardInput = require('./read-from-standard-input');
const {google} = require('googleapis');
const oauthClient = require('./oauth-client');
const {getToken, saveToken} = require('./token');
const getTokenFromCode = require('./get-token-from-code');

class GoogleDriveClient {
  async init() {
    const oAuth2Client = oauthClient();
    const token = getToken();
    if (token) {
      oAuth2Client.setCredentials(token);
    } else {
      const scopes = ['https://www.googleapis.com/auth/drive.readonly', 'https://www.googleapis.com/auth/drive.metadata.readonly'];
      const authUrl = oAuth2Client.generateAuthUrl({access_type: 'offline', scope: scopes, prompt: 'consent'});
      console.log('Authorize this app by visiting this url:', authUrl);
      const code = await readFromStandardInput();
      const token = await getTokenFromCode(oAuth2Client, code);
      oAuth2Client.setCredentials(token);
      saveToken(token);
    }
    this.client = google.drive({version: 'v3', auth: oAuth2Client});
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

client.client.files.list({ fields: 'files(id, name, md5Checksum)', q: '\'1CwdEQNMpgUvMjL-Cok2n16vT55F2AT52\' in parents' }, (err, res) => { console.log(res.data.files); });