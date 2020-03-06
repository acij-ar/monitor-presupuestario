const mockRegister = jest.fn();
jest.mock('@babel/register', () => mockRegister);
const mockPolyfill = jest.fn();
jest.mock('@babel/polyfill', () => mockPolyfill());
const mockCreateTables = jest.fn();
jest.mock('../services/db/management/create-tables', () => mockCreateTables);

const mockUse = jest.fn();
const mockListen = jest.fn();
const mockExpress = jest.fn(() => ({
  use: mockUse,
  listen: mockListen,
}));
const mockStatic = jest.fn((path) => path);
mockExpress.static = mockStatic;
jest.mock('express', () => mockExpress);
const mockCookieParser = jest.fn(() => 'cookie-parser-middleware');
jest.mock('cookie-parser', () => mockCookieParser);
const mockCompression = jest.fn(() => 'compression-middleware');
jest.mock('compression', () => mockCompression);
const mockMorgan = jest.fn(() => 'morgan-middleware');
jest.mock('morgan', () => mockMorgan);
const mockManifestHelper = jest.fn(() => 'manifest-helper-middleware');
jest.mock('express-manifest-helpers', () => ({ default: mockManifestHelper}));
jest.mock('../app', () => 'app-router');
jest.mock('../api', () => 'api-router');
const path = require('path');

describe('Server script', () => {
  require('../server');

  it('should include babel dependencies', () => {
    expect(mockRegister).toHaveBeenCalledTimes(1);
    expect(mockPolyfill).toHaveBeenCalledTimes(1);
  });

  it('should initiaize db', () => {
    expect(mockCreateTables).toHaveBeenCalledTimes(1);
  });

  it('should register static folders', () => {
    const distPath = path.join(__dirname, '..', '..', 'dist');
    const publicPath = path.join(__dirname, '..', '..', 'public');
    expect(mockStatic).toHaveBeenCalledWith(distPath, {maxAge: '1y', immutable: true});
    expect(mockStatic).toHaveBeenCalledWith(publicPath, {maxAge: '1y', immutable: true});
    expect(mockUse).toHaveBeenCalledWith('/static', distPath);
    expect(mockUse).toHaveBeenCalledWith('/static', publicPath);
  });

  it('should register middlewares', () => {
    expect(mockUse).toHaveBeenCalledWith('/', 'app-router');
    expect(mockUse).toHaveBeenCalledWith('/api', 'api-router');
  });

  it('should register controllers', () => {
    expect(mockUse).toHaveBeenCalledWith('cookie-parser-middleware');
    expect(mockUse).toHaveBeenCalledWith('compression-middleware');
    expect(mockUse).toHaveBeenCalledWith('morgan-middleware');
    expect(mockUse).toHaveBeenCalledWith('manifest-helper-middleware');
  });

  it('should run server in port 8080 by default', () => {
    expect(mockListen).toHaveBeenCalledWith(8080);
  });
});