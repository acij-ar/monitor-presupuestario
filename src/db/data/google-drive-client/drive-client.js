const {google} = require('googleapis');
const {web: {client_secret, client_id, redirect_uris}} = require('./credentials.json');
const readFromStandardInput = require('./read-from-standard-input');
const {getToken, saveToken} = require('./token');
const getTokenFromCode = require('./get-token-from-code');
const scopes = ['https://www.googleapis.com/auth/drive.readonly', 'https://www.googleapis.com/auth/drive.metadata.readonly'];

module.exports = async () => {
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
  const token = getToken();
  if (token) {
    oAuth2Client.setCredentials(token);
  } else {
    const authUrl = oAuth2Client.generateAuthUrl({access_type: 'offline', scope: scopes, prompt: 'consent'});
    console.log('Authorize this app by visiting this url:', authUrl);
    const code = await readFromStandardInput();
    const token = await getTokenFromCode(oAuth2Client, code);
    oAuth2Client.setCredentials(token);
    saveToken(token);
  }
  return google.drive({version: 'v3', auth: oAuth2Client});
};
