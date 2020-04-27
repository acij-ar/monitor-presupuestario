const React = require('react');
const ContentSection = require('../../../../components/content-section');

const WhatIsTheBudget = () => (
  <ContentSection id="what-is-the-budget" title="¿Qué es?">
    <p>El presupuesto del Estado (sea este nacional, provincial, local o municipal) es la mejor manera de conocer
      las prioridades y compromisos reales de los gobiernos. En él se detalla cómo se planifica generar recursos
      en un determinado período de tiempo y también cómo se planea usarlos. Cómo, cuándo y cuántos recursos se
      gastan en cada una de las actividades determina que se alcancen (o no) los objetivos y metas de las
      distintas políticas públicas, incluídas aquellas determinantes para la garantía de los derechos humanos.</p>
    <p>Desde el punto de vista de la economía, es usual que se identifiquen tres funciones clave de los
      presupuestos públicos:</p>
    <ol>
      <li>Distribuir recursos para la provisión de bienes y servicios</li>
      <li>Redistribuir el ingreso y la riqueza</li>
      <li>Estabilizar la economía.</li>
    </ol>
  </ContentSection>
);

module.exports = WhatIsTheBudget;
