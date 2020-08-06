const React = require('react');
const PropTypes = require('prop-types');

const MonitorMainSection = ({selectedSection}) => (
  <div className={`monitor-main-section`}>
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
    {
      selectedSection === 'explore' ?
        <p>
          Esta sección te ayudará a ver mejor la composición del presupuesto nacional y conocer cómo se distribuye en
          cada año. La visualización que ves al inicio muestra el 100% del presupuesto. A partir de ahí podés filtrar a
          través de sus Jurisdicciones, Entidades, Programas y Actividades. Podés ir más adentro en cada círculo de la
          visualización para conocer mejor la distribución.
        </p> :
        <p>
          El Comparador te permite seleccionar los filtros de exploración, pero también cruzar la información y poder
          cotejar cómo cambia a través de los años y cuáles son las diferencias entre el dinero asignado a los distintos
          programas y actividades.
        </p>
    }
  </div>
);

MonitorMainSection.propTypes = {
  selectedSection: PropTypes.string.isRequired,
};

module.exports = MonitorMainSection;
