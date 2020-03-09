const getTokenFromCode = require('../get-token-from-code');

describe('Get token from code', () => {
  it('should call google auth and resolve when successfull', (done) => {
    let codePassedToAuthHelper;
    const mockAuth = {
      getToken: (code, callback) => {
        codePassedToAuthHelper = code;
        callback(null, 'some-mocked-token');
      }
    };
    const mockCode = 'some-mocked-code';
    return getTokenFromCode(mockAuth, mockCode).then((token) => {
      expect(codePassedToAuthHelper).toBe('some-mocked-code');
      expect(token).toBe('some-mocked-token');
      done();
    });
  });

  it('should call google auth and reject when errored', (done) => {
    let codePassedToAuthHelper;
    const mockAuth = {
      getToken: (code, callback) => {
        codePassedToAuthHelper = code;
        callback('some-error');
      }
    };
    const mockCode = 'some-mocked-code';
    return getTokenFromCode(mockAuth, mockCode).catch((error) => {
      expect(codePassedToAuthHelper).toBe('some-mocked-code');
      expect(error).toBe('some-error');
      done();
    });
  });
});
