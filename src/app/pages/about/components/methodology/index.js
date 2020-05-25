const React = require('react');
const ContentSection = require('../../../../components/content-section');

const AboutMethodology = () => (
  <ContentSection id="about-methodology" title="Metodología">
    <p>Para desarrollar el Monitor presupuestario utilizamos la información provista por el Ministerio de Hacienda,
      específicamente los dataset de Crédito y Gasto completo (distribución diaria acumulada de los créditos
      presupuestarios con clasificadores completos) desde el año 2007 al año 2018, disponible en el sitio
      presupuestoabierto.gob.ar .</p>
    <p>La información sobre el proyecto de presupuesto 2019 fue solicitada por ACIJ al Ministerio de Hacienda por medio
      de un pedido de acceso a la información. Asimismo, actualmente se encuentra disponible en el sitio del Ministerio
      de Hacienda en <a href="https://www.minhacienda.gob.ar/onp/presupuesto_ciudadano/index.html" target="_blank"
                        rel="noopener noreferrer">este link</a>.
    </p>
  </ContentSection>
);

module.exports = AboutMethodology;


