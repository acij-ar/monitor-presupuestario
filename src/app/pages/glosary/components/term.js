const React = require('react');
const PropTypes = require('prop-types');
const ContentSection = require('../../../components/content-section');

const Term = ({name, definition}) => (
  <div className="glosary-term">
    <ContentSection title={name}>
      {definition}
    </ContentSection>
  </div>
);

Term.propTypes = {
  name: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
}


module.exports = Term;
