const fs = require('fs');
const path = require('path');
const logger = require('../../../utils/logger');

const token_path = path.join(__dirname, 'token.json');

/**
 * Returns the token object stored in the filesystem if exists.
 * Otherwise, returns null
 *
 * @returns {object|null} - Token object (if the token exists in filesystem) or null
 */
const getToken = () => {
  let token = null;
  if (fs.existsSync(token_path)) {
    const tokenContent = fs.readFileSync(token_path).toString();
    token = JSON.parse(tokenContent);
  }
  return token;
};

/**
 * Saves the token obtained from the googleapis lib to the token_path
 *
 * @param {object} token - Token object obtained from the googleapis lib
 */
const saveToken = (token) => {
  fs.writeFileSync(token_path, JSON.stringify(token));
  logger.info('Token stored to', token_path);
};

module.exports = {
  getToken,
  saveToken,
};
