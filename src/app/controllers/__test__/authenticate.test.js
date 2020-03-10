const mockLoggedInHelper = jest.fn();
jest.mock('../../../services/authentication/user-is-logged', () => mockLoggedInHelper);

const authenticateController = require('../authenticate');

describe('Authenticate controller', () => {
  it('should redirect to login if user is not logged in', () => {
    mockLoggedInHelper.mockReturnValueOnce(false);
    const mockReq = 'mock-req';
    const mockRes = { redirect: jest.fn() };
    const mockNext = jest.fn();
    authenticateController(mockReq, mockRes, mockNext);
    expect(mockRes.redirect).toHaveBeenCalledTimes(1);
    expect(mockRes.redirect).toHaveBeenCalledWith('/login');
    expect(mockNext).toHaveBeenCalledTimes(0);
  });

  it('should call next controller if user is already logged in', () => {
    mockLoggedInHelper.mockReturnValueOnce(true);
    const mockReq = 'mock-req';
    const mockRes = { redirect: jest.fn() };
    const mockNext = jest.fn();
    authenticateController(mockReq, mockRes, mockNext);
    expect(mockRes.redirect).toHaveBeenCalledTimes(0);
    expect(mockNext).toHaveBeenCalledTimes(1);
  });
});
