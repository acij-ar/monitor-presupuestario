const mockGet = jest.fn();
jest.mock('express', () => ({ Router: () => ({ get: mockGet }) }));
jest.mock('../pages/home', () => 'home-render-controller');
jest.mock('../pages/compare', () => 'compare-render-controller');
jest.mock('../pages/explore', () => 'explore-render-controller');
jest.mock('../pages/about', () => 'about-render-controller');
jest.mock('../pages/admin', () => 'admin-render-controller');
jest.mock('../pages/login', () => 'login-render-controller');
jest.mock('../controllers/render', () => 'render-controller');
jest.mock('../controllers/authenticate', () => 'admin-authenticate-controller');
jest.mock('../controllers/redirect-if-logged-in', () => 'redirect-login-controller');

describe('App router', () => {
  it('should register routes', () => {
    const router = require('..');

    expect(router).toEqual({ get: mockGet });
    expect(mockGet).toHaveBeenCalledWith('/', 'home-render-controller', 'render-controller');
    expect(mockGet).toHaveBeenCalledWith('/monitor', expect.any(Function));
    expect(mockGet).toHaveBeenCalledWith('/monitor/explorar', 'explore-render-controller', 'render-controller');
    expect(mockGet).toHaveBeenCalledWith('/monitor/comparar', 'compare-render-controller', 'render-controller');
    expect(mockGet).toHaveBeenCalledWith('/acerca-de', 'about-render-controller', 'render-controller');
    expect(mockGet).toHaveBeenCalledWith('/admin', 'admin-authenticate-controller', 'admin-render-controller', 'render-controller');
    expect(mockGet).toHaveBeenCalledWith('/login', 'redirect-login-controller', 'login-render-controller', 'render-controller');
  });
});
