const logger = require('../../../utils/logger');

/**
 * @typedef {object} OAuth2Client
 * @property {Function} getToken - Gets token from oauth code
 */

/**
 * Returns the associated token for a user. This should be called after
 * the user completed the authorization flow and the url callback has
 * been called with the authorization code
 *
 * @param {OAuth2Client} auth - Oauth client from the googleapis lib
 * @param {string} code - Code obtained from the oauth flow
 * @returns {Promise<object>}
 */

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
