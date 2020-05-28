const React = require('react');
const BudgetAccordion = require('./accordion');

const BudgetWhatFor = () => (
  <BudgetAccordion
    id="budget-what-for"
    smallTitle="¿PARA QUÉ SE GASTA?"
    longTitle="CLASIFICACIÓN DEL GASTO POR FINALIDADES Y FUNCIONES."
  >
    <p>Esta clasificación presenta el gasto público según la naturaleza de los servicios que se brindan a la
      comunidad, permite identificar los objetivos perseguidos por el gasto público en términos generales y los medios
      para alcanzarlos.</p>
    <p>Cuando un gasto tenga potencialmente más de una función, entonces va a clasificarse según la función más
      relevante o significativa. Esta clasificación (que como siempre tendrá su correlato en una codificación
      numérica) se organiza en 5 finalidades (identificadas por el primer dígito de la clasificación), y en 30
      funciones (identificadas por el segundo dígito). Más información en la sección Acerca De (link a Glosario dentro
      del Acerca De para conocer todas las finalidades y funciones).</p>
  </BudgetAccordion>
);

module.exports = BudgetWhatFor;




