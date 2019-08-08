const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const path = require('path');
const oauthClient = require('./oauth-client');

const token_path = path.join(__dirname, 'token.json');

class GoogleDriveClient {
    async init() {
        const oAuth2Client = oauthClient();
        const token = GoogleDriveClient.getToken();
        if (token) {
            oAuth2Client.setCredentials(token);
        } else {
            const scopes = ['https://www.googleapis.com/auth/drive.readonly', 'https://www.googleapis.com/auth/drive.metadata.readonly'];
            const authUrl = oAuth2Client.generateAuthUrl({access_type: 'offline', scope: scopes, prompt: 'consent'});
            console.log('Authorize this app by visiting this url:', authUrl);
            const code = await GoogleDriveClient.codeFromStandardInput();
            const token = await GoogleDriveClient.getTokenFromCode(oAuth2Client, code);
            oAuth2Client.setCredentials(token);
            fs.writeFileSync(token_path, JSON.stringify(token));
            console.log('Token stored to', token_path);
        }
        this.client = google.drive({version: 'v3', auth: oAuth2Client});
    }

    static getToken() {
        let token;
        if (fs.existsSync(token_path)) {
            const tokenContent = fs.readFileSync(token_path);
            token = JSON.parse(tokenContent);
        }
        return token;
    }

    static getTokenFromCode(auth, code) {
        return new Promise((resolve, reject) => {
            auth.getToken(code, (err, token) => {
                if (err) {
                    console.error('Error retrieving access token', err);
                    return reject(err)
                }
                resolve(token)
            });
        })
    };

    static codeFromStandardInput() {
        return new Promise(resolve => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            rl.question('Enter the code from that page here: ', (code) => {
                rl.close();
                resolve(code)
            });
        })
    }

    downloadFile({ fileId, outputPath }) {
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
                        .pipe(dest)
                }
            )
        })
    }
}

const googleDriveClient = new GoogleDriveClient;
googleDriveClient.init();

module.exports = googleDriveClient;
