const React = require('react');
const { shallow } = require('enzyme');

const MainContent = require('..');

describe('Doubts MainContent component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<MainContent/>);
    expect(wrapper).toMatchSnapshot();
  });
});
