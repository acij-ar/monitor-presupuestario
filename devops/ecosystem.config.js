module.exports = {
  apps : [{
    name: 'server',
    cwd: '/home/iheredia/repositories/acij-ar/monitor-presupuestario',
    script: '/home/iheredia/repositories/acij-ar/monitor-presupuestario/dist/server.js',
    interpreter: 'node',
  }, {
    name: 'test-server',
    cwd: '/home/iheredia/repositories/acij-ar/test-monitor-presupuestario',
    script: '/home/iheredia/repositories/acij-ar/test-monitor-presupuestario/dist/server.js',
    interpreter: 'node',
    env: {
      PORT: "8081",
    },
  }],
};