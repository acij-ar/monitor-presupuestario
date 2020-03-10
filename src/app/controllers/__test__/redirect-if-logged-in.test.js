const mockLoggedInHelper = jest.fn();
jest.mock('../../../services/authentication/user-is-logged', () => mockLoggedInHelper);

const redirectIfLoggedInController = require('../redirect-if-logged-in');

describe('redirectIfLoggedIn controller', () => {
  it('should redirect to admin if user is already logged in', () => {
    mockLoggedInHelper.mockReturnValueOnce(true);
    const mockReq = 'mock-req';
    const mockRes = { redirect: jest.fn() };
    const mockNext = jest.fn();
    redirectIfLoggedInController(mockReq, mockRes, mockNext);
    expect(mockRes.redirect).toHaveBeenCalledTimes(1);
    expect(mockRes.redirect).toHaveBeenCalledWith('/admin');
    expect(mockNext).toHaveBeenCalledTimes(0);
  });

  it('should call next controller if user is not logged in', () => {
    mockLoggedInHelper.mockReturnValueOnce(false);
    const mockReq = 'mock-req';
    const mockRes = { redirect: jest.fn() };
    const mockNext = jest.fn();
    redirectIfLoggedInController(mockReq, mockRes, mockNext);
    expect(mockRes.redirect).toHaveBeenCalledTimes(0);
    expect(mockNext).toHaveBeenCalledTimes(1);
  });
});
