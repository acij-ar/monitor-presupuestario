const mockRouterUse = jest.fn();
const mockRouterGet = jest.fn();
jest.mock('express', () => ({
  Router: () => ({
    use: mockRouterUse,
    get: mockRouterGet,
  }),
  json: () => 'json-middleware',
}));
jest.mock('../admin', () => 'admin-router');
jest.mock('../ping-controller', () => 'ping-controller');

describe('Api main router', () => {
  it('should register api routes and middlewares', () => {
    require('..');
    expect(mockRouterUse).toHaveBeenCalledWith('json-middleware');
    expect(mockRouterUse).toHaveBeenCalledWith('/admin', 'admin-router');
    expect(mockRouterGet).toHaveBeenCalledWith('/ping', 'ping-controller');
  });
});
