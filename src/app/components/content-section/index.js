const React = require('react');
const PropTypes = require('prop-types');

const ContentSection = ({title, children, ...props}) => (
  <div className="content-section" {...props} >
    <h1 className="content-section-title">{title}</h1>
    <div className="content-section-content">
      {children}
    </div>
  </div>
);

ContentSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

module.exports = ContentSection;
