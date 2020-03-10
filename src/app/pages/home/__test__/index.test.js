const mockView = () => <div id="mock-page" />;
jest.mock('../view', () => mockView);

const homeController = require('..');

describe('Home page controller', () => {
  it('should register page info necessary for rendering', () => {
    const mockAssetPath = jest.fn(asset => asset);
    const mockReq = null;
    const mockRes = { locals: { assetPath: mockAssetPath } };
    const mockNext = jest.fn();
    homeController(mockReq, mockRes, mockNext);
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockRes.locals.View).toBe(mockView);
    expect(mockRes.locals.scripts).toEqual(['home.js']);
    expect(mockRes.locals.styles).toEqual(['home.css']);
  });
});
