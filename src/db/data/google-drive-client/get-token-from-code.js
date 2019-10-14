module.exports = (auth, code) => {
  return new Promise((resolve, reject) => {
    auth.getToken(code, (err, token) => {
      if (err) {
        console.error('Error retrieving access token', err);
        return reject(err);
      }
      resolve(token);
    });
  });
};
