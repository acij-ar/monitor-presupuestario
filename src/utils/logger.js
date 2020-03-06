// TODO: consider better log integration and monitorization.
// Example 1: kibana
// Example 2: cronjob that emails all ERROR level logs

class Logger {
  log(level, msg) {
    if (process.env.NODE_ENV !== 'test') {
      const timestamp = (new Date).toISOString().slice(0, 19);
      const serverName = process.env.MONIT_LOG_NAME || 'SERVER';
      console.log(`[${timestamp}] [${serverName}] [${level}] ${msg}`);
    }
  }

  info(msg) {
    this.log('INFO', msg);
  }

  error(msg) {
    this.log('ERROR', msg);
  }
}

module.exports = new Logger;