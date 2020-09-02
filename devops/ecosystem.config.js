module.exports = {
  apps : [{
    name: 'server',
    cwd: '/home/monitor/repositories/acij/monitor-presupuestario/',
    script: './src/server.js',
    env: {
      MONIT_LOG_NAME: 'SERVER',
    },
  }, {
    name: 'test-server',
    cwd: '/home/monitor/repositories/acij/test-monitor-presupuestario/',
    script: './src/server.js',
    env: {
      PORT: "8081",
      MONIT_LOG_NAME: 'TEST-SERVER',
      NODE_ENV: 'production',
    },
  }],
};
