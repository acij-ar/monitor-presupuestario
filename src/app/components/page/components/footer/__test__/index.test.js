const React = require('react');
const { shallow } = require('enzyme');

const Footer = require('..');

describe('Footer component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
