const React = require('react');
const { shallow } = require('enzyme');

const AboutACIJ = require('..');

describe('AboutACIJ component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<AboutACIJ/>);
    expect(wrapper).toMatchSnapshot();
  });
});
