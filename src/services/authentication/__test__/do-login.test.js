jest.mock('../credentials.json', () => ({ password: '123qwe' }));

const doLogin = require('../do-login');

describe('Do-login service', () => {
  it('should return true for the correct password', () => {
    const mockReq = { body: { password: '123qwe' } };
    const mockRes = { cookie: jest.fn() };
    expect(doLogin(mockReq, mockRes)).toBeTruthy();
    expect(mockRes.cookie).toHaveBeenCalledWith('password', '123qwe', { maxAge: 60 * 60 * 24 * 1000});
  });

  it('should return false for incorrect password', () => {
    const mockReq = { body: { password: '123' } };
    const mockRes = null;
    expect(doLogin(mockReq, mockRes)).toBeFalsy();
  });
});

