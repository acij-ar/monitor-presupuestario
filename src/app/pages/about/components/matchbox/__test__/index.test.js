const React = require('react');
const { shallow } = require('enzyme');

const AboutMatchbox = require('..');

describe('AboutMatchbox component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<AboutMatchbox/>);
    expect(wrapper).toMatchSnapshot();
  });
});
