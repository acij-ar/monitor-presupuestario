/**
 * @jest-environment jsdom
 */

const React = require('react');
const mockPolyfill = jest.fn();
jest.mock('@babel/polyfill', () => mockPolyfill());
const mockView = jest.fn(() => <div />);
jest.mock('../view', () => mockView);
const mockHydrate = jest.fn();
jest.mock('react-dom', () => ({ hydrate: mockHydrate }));

describe('Admin client script', () => {
  window.__INITIAL__DATA__ = { 'mocked': 'props' };
  require('../client');

  it('should require dependencies and initialize page', () => {
    expect(mockPolyfill).toHaveBeenCalledTimes(1);
    expect(mockHydrate).toHaveBeenCalledTimes(1);
  });
});


