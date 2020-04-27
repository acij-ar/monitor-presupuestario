const React = require('react');
const { shallow } = require('enzyme');

const WhatIsTheBudget = require('..');

describe('WhatIsTheBudget component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<WhatIsTheBudget/>);
    expect(wrapper).toMatchSnapshot();
  });
});
