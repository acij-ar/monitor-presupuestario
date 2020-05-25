const React = require('react');
const ContentSection = require('../../../../components/content-section');
const PropTypes = require('prop-types');

const BudgetAccordion = ({longTitle, smallTitle, children}) => (
  <div className="budget-accordion">
    <input id={smallTitle} type="checkbox" />
    <label htmlFor={smallTitle}>{smallTitle}</label>
    <ContentSection
      title={(
        <div>
          <h3>{longTitle}</h3>
          <h2>{smallTitle}</h2>
        </div>
      )}
    >
      {children}
    </ContentSection>
  </div>
);

BudgetAccordion.propTypes = {
  longTitle: PropTypes.string.isRequired,
  smallTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

module.exports = BudgetAccordion;
