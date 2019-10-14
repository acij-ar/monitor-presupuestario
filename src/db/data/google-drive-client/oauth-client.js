const {google} = require('googleapis');
const credentials = require('./credentials.json');

module.exports = () => {
  const {client_secret, client_id, redirect_uris} = credentials.web;
  return new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
};
