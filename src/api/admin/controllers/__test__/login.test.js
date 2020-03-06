const mockLoginService = jest.fn();
jest.mock('../../../../services/authentication/do-login', () => mockLoginService);

const loginController = require('../login');

describe('Login api controller', () => {
  it('should return 200 when login is successfull', () => {
    const mockReq = null;
    const mockRes = { sendStatus: jest.fn() };
    mockLoginService.mockReturnValueOnce(true);
    loginController(mockReq, mockRes);
    expect(mockRes.sendStatus).toHaveBeenCalledWith(200);
  });

  it('should return 401 when the login fails', () => {
    const mockReq = null;
    const mockRes = { sendStatus: jest.fn() };
    mockLoginService.mockReturnValueOnce(false);
    loginController(mockReq, mockRes);
    expect(mockRes.sendStatus).toHaveBeenCalledWith(401);
  });
});