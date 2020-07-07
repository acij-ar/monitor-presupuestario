const React = require('react');
const PropTypes = require('prop-types');

const MonitorMainSection = ({selectedSection}) => (
  <div className={`monitor-main-section monitor-main-section-${selectedSection}`}>
    <h1>Monitor</h1>
    <p>Para conocer las prioridades y compromisos reales de los gobiernos la mejor herramienta es su presupuesto. Mirá
      cómo, cuándo y cuántos recursos se gastan -o no- en garantizar derechos. Podés ver las siguientes categorías:
      jurisdicción, entidad, programa y actividad (así como sus metas físicas cuando existen), elegir un año
      o un periodo, y el tipo de presupuesto; original (el sancionado por el congreso), vigente o devengado.
      En la sección de Comparar, podés cotejar programas, actividades o dependencias entre
      sí en un mismo año o a lo largo de un periodo. La información se puede visualizar como la publica el gobierno o
      ajustada por inflación y ha sido sistematizada a partir de los datos y documentos oficiales que publica el Estado
      Nacional en su sitio de Presupuesto Abierto y de la Oficina Nacional de Presupuesto del Ministerio de Hacienda.
      Parte de las fuentes han sido entregadas por el Estado luego de realizar pedidos de acceso a la información
      pública. Más información y metodología en la sección Acerca de.
    </p>
    <h2>¿Qué querés hacer hoy?</h2>
    <a href="/monitor/explorar" id="monitor-main-section-explore-link">EXPLORAR EL PRESUPUESTO</a>
    <a href="/monitor/comparar" id="monitor-main-section-compare-link">COMPARAR</a>
    <p>
      <strong>Texto introductorio</strong>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum
    </p>
  </div>
);

MonitorMainSection.propTypes = {
  selectedSection: PropTypes.string.isRequired,
};

module.exports = MonitorMainSection;
