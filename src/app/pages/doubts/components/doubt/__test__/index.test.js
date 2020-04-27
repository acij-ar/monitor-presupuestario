const React = require('react');
const { shallow } = require('enzyme');

const Doubt = require('..');

describe('Doubt component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Doubt title="Mocked doubt title">
        Mocked doubt content
      </Doubt>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
