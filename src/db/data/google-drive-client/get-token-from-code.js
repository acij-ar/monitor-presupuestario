const logger = require('../../../utils/logger');

module.exports = (auth, code) => {
  return new Promise((resolve, reject) => {
    auth.getToken(code, (err, token) => {
      if (err) {
        logger.error('Error retrieving access token', err);
        return reject(err);
      }
      resolve(token);
    });
  });
};
