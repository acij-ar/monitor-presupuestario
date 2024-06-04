const React = require('react');
const PropTypes = require('prop-types');

const NodeTemplate = ({ nodeData }) => (
  <div className={`org-node org-node-${nodeData.key || 'root'}`}>
    {nodeData.name}
  </div>
);

NodeTemplate.propTypes = {
  nodeData: PropTypes.shape({
    name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]).isRequired,
    key: PropTypes.key,
  }).isRequired,
}

module.exports = NodeTemplate;
