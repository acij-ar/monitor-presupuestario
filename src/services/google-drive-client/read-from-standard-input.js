const readline = require('readline');

/**
 * Reads code from standard input
 *
 * @returns {Promise<string>} - Promise that resolves with code from stdin
 */
module.exports = () => (
  new Promise(resolve => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      resolve(code);
    });
  })
);
