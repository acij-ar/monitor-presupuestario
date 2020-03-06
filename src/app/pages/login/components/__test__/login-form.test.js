const mockPost = jest.fn();
jest.mock('axios', () => ({ post: mockPost }));

const React = require('react');
const { shallow } = require('enzyme');

const LoginForm = require('../login-form');

describe('Login form component', () => {
  beforeEach(() => {
    mockPost.mockClear();
  });

  it('should match snapshot for empty state', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should login successfully after pressing enter + snapshot', async () => {
    mockPost.mockReturnValueOnce(Promise.resolve());
    const wrapper = shallow(<LoginForm />);
    const passwordInput = wrapper.find('input');
    await passwordInput.simulate('change', { target: { value: 'password123' } });
    await passwordInput.simulate('keydown', {key: 'Enter'});
    expect(mockPost).toHaveBeenCalledWith('/api/admin/login', { password: 'password123' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should login successfully after clicking button + snapshot', async () => {
    mockPost.mockReturnValueOnce(Promise.resolve());
    const wrapper = shallow(<LoginForm />);
    const passwordInput = wrapper.find('input');
    await passwordInput.simulate('change', { target: { value: 'password456' } });
    await wrapper.find('button').simulate('click');
    expect(mockPost).toHaveBeenCalledWith('/api/admin/login', { password: 'password456' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should fail login + snapshot', async () => {
    mockPost.mockReturnValueOnce(Promise.reject('Mocked login error'));
    const wrapper = shallow(<LoginForm />);
    const passwordInput = wrapper.find('input');
    await passwordInput.simulate('change', { target: { value: 'invalid-password' } });
    await wrapper.find('button').simulate('click');
    expect(mockPost).toHaveBeenCalledWith('/api/admin/login', { password: 'invalid-password' });
    expect(wrapper).toMatchSnapshot();
  });
});
