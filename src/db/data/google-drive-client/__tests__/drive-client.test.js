const mockWebCredentials = {
  client_secret: 'some-secret',
  client_id: 'client-id',
  redirect_uris: ['redirect-uri'],
};
jest.mock('../credentials.json', () => ({
  web: mockWebCredentials,
}));

const mockConstructor = jest.fn();
const mockSetCredentials = jest.fn();
const mockGenerateAuthUrl = jest.fn();
const mockOAuth2 = class MockOAuth2 {
  constructor(...args) {
    return mockConstructor(...args);
  }
  setCredentials(...args) {
    return mockSetCredentials(...args);
  }
  generateAuthUrl(...args) {
    return mockGenerateAuthUrl(...args);
  }
};
const mockDriveClient = jest.fn(() => 'mocked-drive-client');
jest.mock('googleapis', () => ({
  google: {
    auth: { OAuth2: mockOAuth2 },
    drive: mockDriveClient
  },
}));

jest.mock('../read-from-standard-input', () => async () => 'code-from-standard-input');
jest.mock('../get-token-from-code', () => async () => 'token-from-code');

const mockGetToken = jest.fn().mockReturnValueOnce('mocked-token').mockReturnValueOnce(null);
const mockSaveToken = jest.fn();
jest.mock('../token', () => ({
  getToken: mockGetToken,
  saveToken: mockSaveToken,
}));

const driveClient = require('../drive-client');

describe('Google oauth client', () => {
  afterEach(() => {
    mockConstructor.mockClear();
    mockSetCredentials.mockClear();
    mockDriveClient.mockClear();
    mockGenerateAuthUrl.mockClear();
  });

  it('should initialize when token exists', async (done) => {
    const client = await driveClient();
    expect(mockConstructor).toHaveBeenCalledTimes(1);
    expect(mockConstructor).toHaveBeenLastCalledWith(mockWebCredentials.client_id, mockWebCredentials.client_secret, mockWebCredentials.redirect_uris[0]);
    expect(mockSetCredentials).toHaveBeenCalledTimes(1);
    expect(mockSetCredentials).toHaveBeenLastCalledWith('mocked-token');
    expect(mockDriveClient).toHaveBeenCalledTimes(1);
    expect(client).toBe('mocked-drive-client');
    expect(mockGenerateAuthUrl).toHaveBeenCalledTimes(0);
    done();
  });

  it('should do oauth flow when token doesnt exists', async (done) => {
    const client = await driveClient();
    expect(mockConstructor).toHaveBeenCalledTimes(1);
    expect(mockConstructor).toHaveBeenLastCalledWith(mockWebCredentials.client_id, mockWebCredentials.client_secret, mockWebCredentials.redirect_uris[0]);
    expect(mockGenerateAuthUrl).toHaveBeenCalledTimes(1);
    expect(mockSetCredentials).toHaveBeenCalledTimes(1);
    expect(mockSetCredentials).toHaveBeenLastCalledWith('token-from-code');
    expect(mockSaveToken).toHaveBeenCalledTimes(1);
    expect(mockSaveToken).toHaveBeenLastCalledWith('token-from-code');
    expect(mockDriveClient).toHaveBeenCalledTimes(1);
    expect(client).toBe('mocked-drive-client');
    done();
  });
});
