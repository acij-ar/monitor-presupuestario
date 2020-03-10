jest.mock('../components/texts-form', () => () => <div id="texts-form" />);
jest.mock('../components/datasets-form', () => () => <div id="datasets-form" />);

const React = require('react');
const { shallow } = require('enzyme');

const Admin = require('../view');

describe('Admin page', () => {
  it('should match snapshot', () => {
    const props = {
      texts: { mock: 'tetxs-for-the-admin' },
    };
    const wrapper = shallow(<Admin {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
