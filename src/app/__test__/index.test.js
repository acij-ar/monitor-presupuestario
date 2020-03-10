const mockGet = jest.fn();
jest.mock('express', () => ({ Router: () => ({ get: mockGet }) }));
jest.mock('../pages/home', () => ({ render: 'home-render-controller'}));
jest.mock('../pages/monitor', () => ({ render: 'monitor-render-controller'}));
jest.mock('../pages/about', () => ({ render: 'about-render-controller'}));
jest.mock('../pages/admin', () => ({ render: 'admin-render-controller', authenticate: 'admin-authenticate-controller' }));
jest.mock('../pages/login', () => ({ render: 'login-render-controller', redirectIfAlreadyLoggedIn: 'redirect-login-controller' }));

describe('App router', () => {
  it('should register routes', () => {
    const router = require('..');

    expect(router).toEqual({ get: mockGet });
    expect(mockGet).toHaveBeenCalledWith('/', 'home-render-controller');
    expect(mockGet).toHaveBeenCalledWith('/monitor', 'monitor-render-controller');
    expect(mockGet).toHaveBeenCalledWith('/acerca-de', 'about-render-controller');
    expect(mockGet).toHaveBeenCalledWith('/admin', 'admin-authenticate-controller', 'admin-render-controller');
    expect(mockGet).toHaveBeenCalledWith('/login', 'redirect-login-controller', 'login-render-controller');
  });
});
