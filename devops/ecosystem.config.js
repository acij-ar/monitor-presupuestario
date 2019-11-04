module.exports = {
  apps : [{
    name: 'server',
    script: '/home/iheredia/repositories/acij-ar/monitor-presupuestario/dist/server.js',
    interpreter: 'node',
  }, {
    name: 'server',
    script: '/home/iheredia/repositories/acij-ar/test-monitor-presupuestario/dist/server.js',
    env: {
      PORT: "8081",
    },
  }],
};