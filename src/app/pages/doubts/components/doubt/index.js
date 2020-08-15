const React = require('react');
const PropTypes = require('prop-types');
const ContentSection = require('../../../../components/content-section');

const Doubt = ({title, children}) => (
  <div className="doubt">
    <ContentSection title={title}>
      {children}
    </ContentSection>
  </div>
);

Doubt.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

module.exports = Doubt;
