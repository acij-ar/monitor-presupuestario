const React = require('react');
const { shallow } = require('enzyme');

const ContentSection = require('..');

describe('ContentSection component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <ContentSection title="mocked title">
        Some content
      </ContentSection>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
