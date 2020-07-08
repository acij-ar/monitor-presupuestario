const React = require('react');
const PropTypes = require('prop-types');

const NodeTemplate = ({ nodeData }) => (
  <div>{nodeData.name}</div>
);

NodeTemplate.propTypes = {
  nodeData: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

module.exports = NodeTemplate;
