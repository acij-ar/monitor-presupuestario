const fs = require('fs');
const path = require('path');
const logger = require('../../../utils/logger');

const token_path = path.join(__dirname, 'token.json');

const getToken = () => {
  let token = null;
  if (fs.existsSync(token_path)) {
    const tokenContent = fs.readFileSync(token_path).toString();
    token = JSON.parse(tokenContent);
  }
  return token;
};

const saveToken = (token) => {
  fs.writeFileSync(token_path, JSON.stringify(token));
  logger.info('Token stored to', token_path);
};

module.exports = {
  getToken,
  saveToken,
};
