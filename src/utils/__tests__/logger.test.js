const consoleLogSpy = jest.spyOn(global.console, 'log').mockImplementation();
const logger = require('../logger');

describe('Logger', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    delete process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  const mockedDate = new Date(2017, 11, 10);
  global.Date = jest.fn(() => mockedDate);

  it('should print msg with INFO tag', () => {
    process.env.NODE_ENV = 'dev';
    logger.info('info msg');
    expect(consoleLogSpy).toHaveBeenCalledWith('[2017-12-10T03:00:00] [INFO] info msg')
  });

  it('should print msg with ERROR tag', () => {
    process.env.NODE_ENV = 'dev';
    logger.error('error msg');
    expect(consoleLogSpy).toHaveBeenCalledWith('[2017-12-10T03:00:00] [ERROR] error msg')
  });
});