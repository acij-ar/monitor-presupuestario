const mockWebCredentials = {
  client_secret: 'some-secret',
  client_id: 'client-id',
  redirect_uris: ['redirect-uri'],
};
jest.mock('../credentials.json', () => ({
  web: mockWebCredentials,
}));

const mockOAuth2 = class MockOAuth2 {
  constructor(client_id, client_secret, redirect_uri) {
    this.client_id = client_id;
    this.client_secret = client_secret;
    this.redirect_uri = redirect_uri;
  }
};
jest.mock('googleapis', () => ({
  google: {
    auth: { OAuth2: mockOAuth2 },
  },
}));

const oauthClient = require('../oauth-client');

describe('Google oauth client', () => {
  it('should initialize', () => {
    const client = oauthClient();
    expect(client).toBeInstanceOf(mockOAuth2);
    expect(client.client_id).toEqual(mockWebCredentials.client_id);
    expect(client.client_secret).toEqual(mockWebCredentials.client_secret);
    expect(client.redirect_uri).toEqual(mockWebCredentials.redirect_uris[0]);
  });
});
