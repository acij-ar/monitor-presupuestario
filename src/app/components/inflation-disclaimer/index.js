const React = require('react');
const PropTypes = require('prop-types');

const InflationDisclaimer = ({params}) => (
  params.inflation === 'Sin ajustar' ? null :
    <p id="inflation-disclaimer">
      La información se encuentra ajustada por inflación y ha sido sistematizada por ACIJ a partir de los datos
      y documentos oficiales que publica el Estado Nacional. La metodologia utilizada para el ajuste por inflación
      se encuentra disponible en la sección de <a href="/acerca-de#about-methodology">Acerca de</a>
    </p>
);

InflationDisclaimer.propTypes = {
  params: PropTypes.shape({
    inflation: PropTypes.string,
  }).isRequired,
}

module.exports = InflationDisclaimer;
