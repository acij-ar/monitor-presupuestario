module.exports = {
  apps : [{
    name: 'server',
    cwd: '/home/iheredia/repositories/acij-ar/monitor-presupuestario/',
    script: './dist/server.js',
  }, {
    name: 'test-server',
    cwd: '/home/iheredia/repositories/acij-ar/test-monitor-presupuestario/',
    script: './dist/server.js',
    env: {
      PORT: "8081",
    },
  }],
};