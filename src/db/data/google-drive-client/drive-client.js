const {google} = require('googleapis');
const {web: {client_secret, client_id, redirect_uris}} = require('./credentials.json');
const readFromStandardInput = require('./read-from-standard-input');
const {getToken, saveToken} = require('./token');
const getTokenFromCode = require('./get-token-from-code');
const scopes = ['https://www.googleapis.com/auth/drive.readonly', 'https://www.googleapis.com/auth/drive.metadata.readonly'];
const logger = require('../../../utils/logger');

/**
 * @typedef {object} GoogleDriveClient
 * @property {object} files - Files client methods
 * @property {Function} files.get - Downloads file
 * @property {Function} files.list - Lists the files in a drive folder
 */

/**
 * Initializes the google drive client from the googleapis lib
 *
 * @returns {GoogleDriveClient}
 */

module.exports = async () => {
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
  const token = getToken();
  if (token) {
    oAuth2Client.setCredentials(token);
  } else {
    const authUrl = oAuth2Client.generateAuthUrl({access_type: 'offline', scope: scopes, prompt: 'consent'});
    logger.info('Authorize this app by visiting this url:', authUrl);
    const code = await readFromStandardInput();
    const token = await getTokenFromCode(oAuth2Client, code);
    oAuth2Client.setCredentials(token);
    saveToken(token);
  }
  return google.drive({version: 'v3', auth: oAuth2Client});
};
