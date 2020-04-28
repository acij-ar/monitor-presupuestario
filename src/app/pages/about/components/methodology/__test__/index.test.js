const React = require('react');
const { shallow } = require('enzyme');

const AboutMethodology = require('..');

describe('AboutMethodology component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<AboutMethodology/>);
    expect(wrapper).toMatchSnapshot();
  });
});
