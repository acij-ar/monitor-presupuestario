const React = require('react');
const Page = require('../../components/page');
const PropTypes = require('prop-types');
const WhatIsTheBudget = require('./components/what-is-the-budget');
const BudgetCycle = require('./components/budget-cycle');
const BudgetSteps = require('./components/budget-steps');
const BudgetClassifications = require('./components/budget-classifications');

const App = ({pageName}) => (
  <Page pageName={pageName}>
    <div id="budget-main-content">
      <WhatIsTheBudget />
      <BudgetCycle />
      <BudgetSteps />
      <BudgetClassifications />
    </div>
  </Page>
);

App.propTypes = {
  pageName: PropTypes.string.isRequired,
};

module.exports = App;
