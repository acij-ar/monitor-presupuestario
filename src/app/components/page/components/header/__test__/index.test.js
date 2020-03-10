const React = require('react');
const { shallow } = require('enzyme');

const Header = require('..');

describe('Header component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
