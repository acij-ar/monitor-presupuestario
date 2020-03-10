const mockView = () => <div id="mock-page" />;
jest.mock('../view', () => mockView);

jest.mock('../../../../services/texts', () => ({ content: { mock: 'content' } }));

const adminController = require('..');

describe('Admin page controller', () => {
  it('should register page info necessary for rendering', () => {
    const mockAssetPath = jest.fn(asset => asset);
    const mockReq = null;
    const mockRes = { locals: { assetPath: mockAssetPath } };
    const mockNext = jest.fn();
    adminController(mockReq, mockRes, mockNext);
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockRes.locals.View).toBe(mockView);
    expect(mockRes.locals.props).toEqual({ texts: { mock: 'content'} });
    expect(mockRes.locals.scripts).toEqual(['admin.js']);
    expect(mockRes.locals.styles).toEqual(['admin.css']);
  });
});
