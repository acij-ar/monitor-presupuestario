const React = require('react');
const BudgetAccordion = require('./accordion');

const BudgetSpent = () => (
  <BudgetAccordion smallTitle="¿EN QUÉ SE GASTA?" longTitle="CLASIFICACIÓN DEL GASTO POR CATEGORÍA PROGRAMÁTICA.">
    <p> Esta clasificación describe de forma específica los programas o acciones del gobierno. Son propuestas que
      atienden a una problemática identificada y que tienen objetivos o metas, e insumos determinados. Su análisis
      permite conocer la asignación de recursos de cada una de las acciones proyectadas en el presupuesto. En orden de
      magnitud puede tratarse de programas, subprogramas, proyectos, actividades y obras.</p>
  </BudgetAccordion>
);

module.exports = BudgetSpent;




