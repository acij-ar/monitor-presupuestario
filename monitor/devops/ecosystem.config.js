module.exports = {
  apps : [{
    name: 'server',
    script: './src/server.js',
    env: {
      MONIT_LOG_NAME: 'SERVER',
    },
  }]
};
