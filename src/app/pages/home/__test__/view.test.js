const React = require('react');
const { shallow } = require('enzyme');

const Home = require('../view');

describe('Home page', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
