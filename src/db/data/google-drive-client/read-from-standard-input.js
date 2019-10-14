const readline = require('readline');

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
