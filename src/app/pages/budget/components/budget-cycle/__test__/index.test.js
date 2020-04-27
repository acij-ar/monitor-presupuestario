const React = require('react');
const { shallow } = require('enzyme');

const BudgetCycle = require('..');

describe('BudgetCycle component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<BudgetCycle/>);
    expect(wrapper).toMatchSnapshot();
  });
});
