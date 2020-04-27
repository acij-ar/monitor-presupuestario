const React = require('react');
const { shallow } = require('enzyme');

const BudgetSteps = require('..');

describe('BudgetSteps component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<BudgetSteps/>);
    expect(wrapper).toMatchSnapshot();
  });
});
