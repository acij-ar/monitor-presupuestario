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
jest.mock('../controllers/job-status', () => 'job-status-controller');
jest.mock('../controllers/update-datasets', () => 'update-dataset-controller');

describe('Admin api router', () => {
  it('should register admin api controllers and middlewares', () => {
    require('..');
    expect(mockRouterPost).toHaveBeenCalledWith('/update_datasets', 'require-login-middleware', 'update-dataset-controller');
    expect(mockRouterGet).toHaveBeenCalledWith('/dataset_job_status', 'require-login-middleware', 'job-status-controller');
    expect(mockRouterPost).toHaveBeenCalledWith('/login', 'login-controller');
  });
});
