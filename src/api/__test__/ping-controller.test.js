const pingController = require('../ping-controller');

describe('Ping controller', () => {
  it('should always return a text-plain "pong"', () => {
    const mockReq = null;
    const mockRes = { send: jest.fn() };
    pingController(mockReq, mockRes);
    expect(mockRes.send).toHaveBeenCalledTimes(1);
    expect(mockRes.send).toHaveBeenCalledWith('pong');
  })
});