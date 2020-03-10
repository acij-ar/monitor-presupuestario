const React = require('react');
const mockView = () => <div id="mock-page" />;
jest.mock('../view', () => mockView);

jest.mock('../../../../services/texts', () => ({ content: { about: { mock: 'content' } } }));

const aboutController = require('..');

describe('About page controller', () => {
  it('should register page info necessary for rendering', () => {
    const mockAssetPath = jest.fn(asset => asset);
    const mockReq = null;
    const mockRes = { locals: { assetPath: mockAssetPath } };
    const mockNext = jest.fn();
    aboutController(mockReq, mockRes, mockNext);
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockRes.locals.View).toBe(mockView);
    expect(mockRes.locals.props).toEqual({ mock: 'content'});
    expect(mockRes.locals.scripts).toEqual(['about.js']);
    expect(mockRes.locals.styles).toEqual(['about.css']);
  });
});
