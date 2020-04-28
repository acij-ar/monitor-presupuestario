const React = require('react');
const { shallow } = require('enzyme');

const AboutMainContent = require('..');

describe('AboutMainContent component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<AboutMainContent/>);
    expect(wrapper).toMatchSnapshot();
  });
});
