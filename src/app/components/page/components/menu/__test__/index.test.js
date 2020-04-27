const React = require('react');
const { shallow } = require('enzyme');

const Menu = require('..');

describe('Menu component', () => {
  it('should match snapshot for active page budget', () => {
    const wrapper = shallow(<Menu selectedPage="budget" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot for active page monitor', () => {
    const wrapper = shallow(<Menu selectedPage="monitor" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot for active page about', () => {
    const wrapper = shallow(<Menu selectedPage="about" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot for active page doubts', () => {
    const wrapper = shallow(<Menu selectedPage="doubts" />);
    expect(wrapper).toMatchSnapshot();
  });
});
