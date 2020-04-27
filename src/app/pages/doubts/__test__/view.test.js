const React = require('react');
const { shallow } = require('enzyme');

const Doubts = require('../view');

describe('Doubts page', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Doubts pageName="doubts"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
