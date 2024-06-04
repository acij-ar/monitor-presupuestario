const React = require('react');
const BudgetAccordion = require('./accordion');

const BudgetWho = () => (
  <BudgetAccordion
    id="budget-who"
    smallTitle="¿QUIÉN GASTA?"
    longTitle="CLASIFICACIÓN INSTITUCIONAL."
  >
    <p>En esta clasificación se organizan los gastos según la estructura del gobierno, y de acuerdo con las
      instituciones y áreas responsables de la ejecución. Las instituciones y áreas se organizan según distintos
      criterios y a cada uno de ellos se les asigna un código numérico. Hay varios niveles que identifican con precisión
      el área de que se trate, por ejemplo, distinguiendo la administración centralizada de la no centralizada, los
      diferentes poderes, etc.</p>
    <p>Cada una de estas instituciones tienen distintos programas y actividades a su cargo y, en muchos casos, se pueden
      identificar las metas físicas esperadas. Dentro del Monitor las mostramos cuando existen.</p>
  </BudgetAccordion>
);

module.exports = BudgetWho;










