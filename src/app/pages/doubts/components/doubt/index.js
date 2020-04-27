const React = require('react');
const PropTypes = require('prop-types');
const ContentSection = require('../../../../components/content-section');

const Doubt = ({title, checked, children}) => (
  <div className="doubt">
    <label>
      <input type="radio" name="doubts" defaultChecked={checked} />
      <ContentSection title={title}>
        {children}
      </ContentSection>
    </label>
  </div>
);

Doubt.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  checked: PropTypes.bool,
}

Doubt.defaultProps = {
  checked: false,
}

module.exports = Doubt;
