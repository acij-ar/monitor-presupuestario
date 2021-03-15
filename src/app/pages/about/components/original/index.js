const React = require('react');
const ContentSection = require('../../../../components/content-section');

const AboutMethodology = () => (
  <ContentSection id="about-original" title="Presupuesto Original">
    <p>El monitor no muestra los presupuestos originales porque esa información no es publicada por el Estado
    en datos abiertos, sino que muestra la información correspondiente al presupuesto inicial o distribuido
    por el Poder Ejecutivo al inicio del ciclo presupuestario. Si querés ver los montos originales de los años en que
    el Congreso efectuó modificaciones al Proyecto de Ley de Presupuesto enviado por el Ejecutivo al momento de aprobar la Ley,
    podés descargar las tablas <a href="https://github.com/acij-ar/monitor-presupuestario/tree/original-data/presupuesto-original" target="_blank">haciendo click aquí.</a> </p>
    <p>Para alcanzar dichos datos, desde ACIJ hemos revisado manualmente los Proyectos de Ley de Presupuesto cuyos dataset sí se publican,
    para plasmar en ellos las modificaciones hechas por el Poder Legislativo y trasladarlas a documentos de excel, y así facilitar
    su procesamiento y sistematización.</p>
    <p>Durante el año 2020, el Congreso Argentino no ha sancionado el presupuesto anual mediante una Ley. Siguiendo las previsiones normativas,
    el Poder Ejecutivo realizó una prórroga del presupuesto 2019 y adecuaciones presupuestarias posteriores. </p>
  </ContentSection>
);

module.exports = AboutMethodology;
