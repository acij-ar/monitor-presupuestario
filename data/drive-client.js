const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const path = require('path');

const scopes = ['https://www.googleapis.com/auth/drive.readonly', 'https://www.googleapis.com/auth/drive.metadata.readonly'];
const credentials_path = path.join(__dirname, '..', 'credentials.json');
const token_path = path.join(__dirname, '..', 'token.json');

const codeFromStandardInput = () => (
    new Promise(resolve => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question('Enter the code from that page here: ', (code) => {
            rl.close();
            resolve(code)
        });
    })
);

const getTokenFromCode = (auth, code) => (
    new Promise((resolve, reject) => {
        auth.getToken(code, (err, token) => {
            if (err) {
                console.error('Error retrieving access token', err);
                return reject(err)
            }
            resolve(token)
        });
    })
);

const DriveClient = async () => {
    const credentialsContent = fs.readFileSync(credentials_path);
    const credentials = JSON.parse(credentialsContent);
    const {client_secret, client_id, redirect_uris} = credentials.web;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    if (path.existsSync(token_path)) {
        const tokenContent = fs.readFileSync(token_path);
        const token = JSON.parse(tokenContent);
        oAuth2Client.setCredentials(JSON.parse(token));
    } else {
        const authUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: scopes,
        });
        console.log('Authorize this app by visiting this url:', authUrl);
        const code = await codeFromStandardInput();
        const token = await getTokenFromCode(oAuth2Client, code);
        oAuth2Client.setCredentials(token);
        fs.writeFileSync(token_path, JSON.stringify(token));
        console.log('Token stored to', token_path);
    }

    return oAuth2Client;
};

module.exports = DriveClient;
