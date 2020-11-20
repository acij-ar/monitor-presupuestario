const React = require('react');
const PropTypes = require('prop-types');
const ContentSection = require('../../../../components/content-section');

const Doubt = ({title, children, index}) => (
  <div className="doubt">
    <input id={`${index}_checkbox`} type="radio" name="doubts-accordion" />
    <label htmlFor={`${index}_checkbox`}>{title}</label>
    <ContentSection title={title}>
      {children}
    </ContentSection>
  </div>
);

Doubt.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
}

module.exports = Doubt;
