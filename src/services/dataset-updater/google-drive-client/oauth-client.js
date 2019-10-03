const fs = require('fs');
const path = require('path');
const {google} = require('googleapis');

module.exports = () => {
  const credentials_path = path.join(__dirname, 'credentials.json');
  const credentialsContent = fs.readFileSync(credentials_path);
  const credentials = JSON.parse(credentialsContent);
  const {client_secret, client_id, redirect_uris} = credentials.web;
  return new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
};
