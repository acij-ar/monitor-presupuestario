const React = require('react');
const { shallow } = require('enzyme');

const Home = require('../view');

describe('Home page', () => {
  it('should match snapshot', () => {
    const props = {
      pageName: 'home',
    }
    const wrapper = shallow(<Home {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
