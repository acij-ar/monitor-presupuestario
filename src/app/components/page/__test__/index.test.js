/**
 * @jest-environment jsdom
 */

const React = require('react');
const { shallow } = require('enzyme');

const mockPageview = jest.fn();
jest.mock('../../analytics', () => ({ pageview: mockPageview }));

const Page = require('..');

describe('Page component', () => {
  beforeEach(() => {
    mockPageview.mockClear();
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<Page pageName="mocked-page" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the analytics pageview method', () => {
    Object.defineProperty(window, 'location', { value: { pathname: 'mocked-url'} });
    shallow(<Page pageName="mocked-page" />);
    expect(mockPageview).toHaveBeenCalledTimes(1);
    expect(mockPageview).toHaveBeenCalledWith('mocked-url');
  });
});
