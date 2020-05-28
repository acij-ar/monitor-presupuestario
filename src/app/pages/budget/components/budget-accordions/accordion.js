const React = require('react');
const ContentSection = require('../../../../components/content-section');
const PropTypes = require('prop-types');

const BudgetAccordion = ({id, longTitle, smallTitle, children}) => (
  <div id={id} className="budget-accordion">
    <input id={`${id}_checkbox`} type="checkbox" />
    <label htmlFor={`${id}_checkbox`}>{smallTitle}</label>
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
  id: PropTypes.string.isRequired,
  longTitle: PropTypes.string.isRequired,
  smallTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

module.exports = BudgetAccordion;
