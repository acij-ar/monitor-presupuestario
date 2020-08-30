const React = require('react');
const ContentSection = require('../../../../components/content-section');

const AboutMethodology = () => (
  <ContentSection id="about-methodology" title="Metodología">
    <p>Para desarrollar el Monitor presupuestario utilizamos la información provista por el Ministerio de Economía de la
      Nación, específicamente los dataset de Crédito y Gasto completo (distribución anual acumulada de los créditos
      presupuestarios con clasificadores completos) desde el año 2007 al año 2020, disponible en el sitio
      www.presupuestoabierto.gob.ar .</p>
    <p>En los años 2015 a 2019, el presupuesto original que se muestra, refleja los datos del presupuesto aprobado por
      el Congreso Nacional. Para alcanzar dichos datos, cuya publicación en datos abiertos no es facilitada por el poder
      legislativo, hemos revisado manualmente los proyectos de ley de presupuesto cuyos dataset si se publican, para
      plasmar en ellos las definiciones hechas por las legisladoras y legisladores. Este trabajo se realiza manualmente
      y esperamos con el tiempo, poder hacerlo en los años anteriores. Si encontrás un error o incongruencia, te
      agradecemos que nos lo hagas saber para realizar las correcciones del caso.</p>
    <p>Temporalmente, en los años 2007 a 2014, bajo el rótulo “Presupuesto Original” se muestra el presupuesto
      distribuido por el Poder Ejecutivo conforme los datos abiertos que sus autoridades publican. Durante el año 2020,
      el Congreso Argentino no ha sancionado un presupuesto mediante una Ley. Siguiendo las previsiones normativas el
      Poder Ejecutivo, realizó una prórroga del presupuesto 2019, se consigna como presupuesto original, la primer
      distribución realizada en dicho proceso.</p>
  </ContentSection>
);

module.exports = AboutMethodology;


