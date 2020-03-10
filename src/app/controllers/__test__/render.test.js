const React = require('react');

jest.mock('../../components/layout', () => ({ children }) => <div id="layout">{ children }</div>);

const renderController = require('../render');

describe('Render controller', () => {
  it('should match expected send value for dummy view', () => {
    const View = () => <div id="dummy-view" />;
    const mockReq = null;
    const mockRes = {
      locals: {
        View,
        props: { 'mocked': 'props' },
        scripts: ['http://script.js'],
        styles: ['http://style.css'],
      },
      send: jest.fn(),
    };

    renderController(mockReq, mockRes);

    expect(mockRes.send).toHaveBeenCalledTimes(1);
    expect(mockRes.send).toHaveBeenCalledWith('<!doctype html><div id="layout" data-reactroot=""><div id="dummy-view"></div></div>')
  });
});
