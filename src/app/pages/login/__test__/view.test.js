const React = require('react');
const { shallow } = require('enzyme');

jest.mock('../components/login-form', () => () => <div id="login-form" />);
const Login = require('../view');

describe('Login page', () => {
  it('should match snapshot', () => {
    const props = {
      pageName: 'home',
    }
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
