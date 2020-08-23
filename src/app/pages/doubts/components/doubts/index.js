const React = require('react');
const PropTypes = require('prop-types');
const Doubt = require('../doubt');

const Doubts = ({ faqs }) => (
  <React.Fragment>
    { faqs.map(({ pregunta, respuesta }, index) => (
      <Doubt key={index} title={pregunta} index={index}>
        { respuesta }
      </Doubt>
    )) }
  </React.Fragment>
);

Doubts.propTypes = {
  faqs: PropTypes.array.isRequired,
};


module.exports = Doubts;
