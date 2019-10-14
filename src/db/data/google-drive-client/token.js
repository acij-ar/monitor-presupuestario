const fs = require('fs');
const path = require('path');

const token_path = path.join(__dirname, 'token.json');

const getToken = () => {
  let token = null;
  if (fs.existsSync(token_path)) {
    const tokenContent = fs.readFileSync(token_path);
    token = JSON.parse(tokenContent);
  }
  return token;
};

const saveToken = (token) => {
  fs.writeFileSync(token_path, JSON.stringify(token));
  console.log('Token stored to', token_path);
};

module.exports = {
  getToken,
  saveToken,
};
