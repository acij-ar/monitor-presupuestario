const React = require('react');
const { shallow } = require('enzyme');

const BudgetClassifications = require('..');

describe('BudgetClassifications component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<BudgetClassifications/>);
    expect(wrapper).toMatchSnapshot();
  });
});
