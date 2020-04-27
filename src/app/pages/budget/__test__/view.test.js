const React = require('react');
const { shallow } = require('enzyme');

const Budget = require('../view');

describe('Budget page', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Budget pageName="budget"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
