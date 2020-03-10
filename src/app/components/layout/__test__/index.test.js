const React = require('react');
const { shallow } = require('enzyme');

const Layout = require('..');

describe('Layout component', () => {
  it('should match snapshot', () => {
    const componentProps = { mocked: 'children-props' };
    const props = {
      scripts: ['http://script.js'],
      styles: ['http://style.css'],
      componentProps,
    };
    const wrapper = shallow(
      <Layout {...props} >
        <div id="dummy-children" {...componentProps} />
      </Layout>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
