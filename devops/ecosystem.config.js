module.exports = {
  apps : [{
    name: 'server',
    cwd: '/home/iheredia/repositories/acij-ar/monitor-presupuestario/',
    script: './dist/server.js',
    env: {
      MONIT_LOG_NAME: 'SERVER',
    },
  }, {
    name: 'test-server',
    cwd: '/home/iheredia/repositories/acij-ar/test-monitor-presupuestario/',
    script: './dist/server.js',
    env: {
      PORT: "8081",
      MONIT_LOG_NAME: 'TEST-SERVER',
    },
  }],
};