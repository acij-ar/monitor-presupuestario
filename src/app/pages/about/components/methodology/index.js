const React = require('react');
const ContentSection = require('../../../../components/content-section');

const AboutMethodology = () => (
  <ContentSection id="about-methodology" title="Metodología">
    <p>Para desarrollar el Monitor presupuestario utilizamos la información publicada por el Ministerio de Economía de la Nación,
    específicamente los dataset de Presupuesto de gastos y su ejecución detallada - agrupación anual 2021 (distribución anual
      acumulada de los créditos presupuestarios con clasificadores completos) desde el año 2007 a la actualidad,
      disponible en el sitio www.presupuestoabierto.gob.ar/sici/datos-abiertos .</p>
    <p>o se incorporan los montos correspondientes al presupuesto original (ver glosario)
    porque no se publica esta información en datos abiertos. Sin embargo, en la sección "Presupuesto original",
    vas a poder descargar las tablas de presupuestos originales de los años en que el Congreso de la Nación efectuó
    modificaciones al Proyecto de Ley de Presupuesto enviado por el Ejecutivo al momento de aprobar la Ley.</p>
  </ContentSection>
);

module.exports = AboutMethodology;
