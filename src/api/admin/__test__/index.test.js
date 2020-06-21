const mockRouterPost = jest.fn();
const mockRouterGet = jest.fn();
jest.mock('express', () => ({
  Router: () => ({
    post: mockRouterPost,
    get: mockRouterGet,
  }),
}));
jest.mock('../controllers/login', () => 'login-controller');
jest.mock('../controllers/require-login', () => 'require-login-middleware');

describe('Admin api router', () => {
  it('should register admin api controllers and middlewares', () => {
    require('..');
    expect(mockRouterPost).toHaveBeenCalledWith('/login', 'login-controller');
  });
});
