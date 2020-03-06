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
jest.mock('../controllers/update-texts', () => 'update-texts-controller');
jest.mock('../controllers/update-datasets', () => ({
  updateDataset: 'update-dataset-controller',
  jobStatus: 'job-status-controller',
}));

describe('Admin api router', () => {
  it('should register admin api controllers and middlewares', () => {
    require('..');
    expect(mockRouterPost).toHaveBeenCalledWith('/texts', 'require-login-middleware', 'update-texts-controller');
    expect(mockRouterPost).toHaveBeenCalledWith('/update_dataset/:filename', 'require-login-middleware', 'update-dataset-controller');
    expect(mockRouterGet).toHaveBeenCalledWith('/dataset_job_status', 'require-login-middleware', 'job-status-controller');
    expect(mockRouterPost).toHaveBeenCalledWith('/login', 'login-controller');
  });
});