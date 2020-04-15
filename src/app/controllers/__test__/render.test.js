const React = require('react');

const mockVerifyProps = jest.fn();
jest.mock('../../components/layout', () => ({ children, ...props }) => {
  mockVerifyProps(props);
  return <div id="layout" >{ children }</div>
});

const renderController = require('../render');

describe('Render controller', () => {
  it('should match expected send value for dummy view', () => {
    const View = () => <div id="dummy-view" />;
    const mockReq = null;
    const mockRes = {
      locals: {
        View,
        props: { 'mocked': 'props' },
        pageName: 'mocked-page-name',
        assetPath: jest.fn(assetName => `/path/to/${assetName}`),
      },
      send: jest.fn(),
    };

    renderController(mockReq, mockRes);

    expect(mockVerifyProps).toHaveBeenCalledWith({
      componentProps: {
        mocked: 'props',
        pageName: 'mocked-page-name',
      },
      scripts: ['/path/to/mocked-page-name.js'],
      styles: ['/path/to/page.css', '/path/to/mocked-page-name.css'],
    });
    expect(mockRes.send).toHaveBeenCalledTimes(1);
    expect(mockRes.send).toHaveBeenCalledWith('<!doctype html><div id="layout" data-reactroot=""><div id="dummy-view"></div></div>')
    expect(mockRes.locals.assetPath).toHaveBeenCalledWith('page.css');
    expect(mockRes.locals.assetPath).toHaveBeenCalledWith('mocked-page-name.css');
    expect(mockRes.locals.assetPath).toHaveBeenCalledWith('mocked-page-name.js');
  });
});
