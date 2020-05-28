const React = require('react');
const Page = require('../../components/page');
const PropTypes = require('prop-types');
const WhatIsTheBudget = require('./components/what-is-the-budget');
const BudgetCycle = require('./components/budget-cycle');
const BudgetSteps = require('./components/budget-steps');
const BudgetClassifications = require('./components/budget-classifications');
const BudgetSpentAccordion = require('./components/budget-accordions/budget-spent');
const BudgetWhatForAccordion = require('./components/budget-accordions/budget-what-for');
const BudgetWhoAccordion = require('./components/budget-accordions/budget-who');
const BudgetChart = require('./components/budget-chart');
const BudgetInflation = require('./components/budget-inflation');
const BudgetAnalysis = require('./components/budget-analysis');
const BudgetExampleAnalysis = require('./components/budget-example-analysis');

const App = ({pageName}) => (
  <Page pageName={pageName}>
    <div id="budget-main-content">
      <WhatIsTheBudget />
      <BudgetCycle />
      <BudgetSteps />
      <BudgetClassifications />
      <BudgetSpentAccordion />
      <BudgetWhatForAccordion />
      <BudgetWhoAccordion />
      <BudgetChart />
      <BudgetInflation />
      <BudgetAnalysis />
      <BudgetExampleAnalysis />
    </div>
  </Page>
);

App.propTypes = {
  pageName: PropTypes.string.isRequired,
};

module.exports = App;
