const React = require('react');
const { shallow } = require('enzyme');

const Doubts = require('..');

describe('Doubts component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Doubts/>);
    expect(wrapper).toMatchSnapshot();
  });
});
