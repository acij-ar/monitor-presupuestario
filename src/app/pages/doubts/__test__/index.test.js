const React = require('react');
const mockView = () => <div id="mock-page" />;
jest.mock('../view', () => mockView);

const doubtsController = require('..');

describe('Doubts page controller', () => {
  it('should register page info necessary for rendering', () => {
    const mockAssetPath = jest.fn(asset => asset);
    const mockReq = null;
    const mockRes = { locals: { assetPath: mockAssetPath } };
    const mockNext = jest.fn();
    doubtsController(mockReq, mockRes, mockNext);
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockRes.locals.View).toBe(mockView);
    expect(mockRes.locals.pageName).toBe('doubts');
  });
});
