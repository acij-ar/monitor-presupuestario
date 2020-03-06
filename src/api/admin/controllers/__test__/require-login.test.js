const mockUserIsLogged = jest.fn();
jest.mock('../../../../services/authentication/user-is-logged', () => mockUserIsLogged);

const requireLoginMiddleware = require('../require-login');

describe('Require login middleware', () => {
  it('should call next middleware when user is logged in', () => {
    const mockReq = null;
    const mockRes = { sendStatus: jest.fn() };
    const mockNext = jest.fn();
    mockUserIsLogged.mockReturnValueOnce(true);
    requireLoginMiddleware(mockReq, mockRes, mockNext);
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockRes.sendStatus).toHaveBeenCalledTimes(0);
  });

  it('should return 401 when user is not logged in', () => {
    const mockReq = null;
    const mockRes = { sendStatus: jest.fn() };
    const mockNext = jest.fn();
    mockUserIsLogged.mockReturnValueOnce(false);
    requireLoginMiddleware(mockReq, mockRes, mockNext);
    expect(mockNext).toHaveBeenCalledTimes(0);
    expect(mockRes.sendStatus).toHaveBeenCalledWith(401)
  });
});