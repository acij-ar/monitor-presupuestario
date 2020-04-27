const React = require('react');
const ContentSection = require('../../../../components/content-section');

const BudgetCycle = () => (
  <ContentSection id="budget-cycle" title="El ciclo del presupuesto">
    <p>El presupuesto del Estado pasa por distintas etapas, antes, durante y después de lo que se suele denominar
      “ejercicio fiscal”. Este término alude al periodo de 12 meses en los que se ejecuta un determinado
      presupuesto.</p>
    <p>Así, como veremos a continuación, el presupuesto del año 2019 se elaboró, discutió y sancionó en 2018, y
      será evaluado en 2020.</p>
    <p>En cada una de esas etapas, diferentes organismos generan distintos documentos en los que se encontrará
      buena parte de la información necesaria para nuestro análisis. A continuación, vamos a explicar de manera
      sencilla cómo leerlos y qué información puede extraerse de cada uno. Las distintas fases de un ciclo
      presupuestario completo pueden resumirse del siguiente modo:</p>
    <ol>
      <li>Formulación</li>
      <li>Discusión y aprobación</li>
      <li>Ejecución</li>
      <li>Control y rendición de cuentas</li>
    </ol>
  </ContentSection>
);

module.exports = BudgetCycle;