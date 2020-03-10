jest.mock('../credentials.json', () => ({ password: '123qwe' }));

const userIsLogged = require('../user-is-logged');

describe('User-is-logged service', () => {
  it('should return true for logged users', () => {
    const mockReq = { cookies: { password: '123qwe' } };
    expect(userIsLogged(mockReq)).toBeTruthy();
  });

  it('should return false for guest users', () => {
    const mockReq = {};
    expect(userIsLogged(mockReq)).toBeFalsy();
  });
});