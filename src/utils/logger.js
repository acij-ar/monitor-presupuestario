const { NODE_ENV } = process.env;

class Logger {
  log(level, msg) {
    if (NODE_ENV !== 'test') {
      const timestamp = (new Date).toISOString().slice(0, 19);
      console.log(`[${timestamp}] [${level}] ${msg}`);
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