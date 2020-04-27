const React = require('react');
const ContentSection = require('../../../../components/content-section');

const BudgetClassifications = () => (
  <ContentSection id="budget-classifications" title="Clasificaciones">
    <p>La información presupuestaria contenida en los distintos documentos puede organizarse y clasificarse de
      muchas formas, que serán más o menos útiles según el análisis que se quiera hacer. Las clasificaciones
      presupuestarias son formas de agrupar u ordenar los recursos y gastos según diferentes criterios, que
      responden algunas preguntas básicas: ¿Quién gasta?, ¿En qué se gasta?, ¿Para qué se gasta?, o ¿Dónde se
      gasta?.</p>
    <p>El detalle de las clasificaciones se ve en las distintas planillas o tablas, que nos permitirán encontrar
      con facilidad la información relevante para nuestro análisis. A continuación presentamos las clasificaciones
      más útiles para conocer rápidamente el presupuesto:</p>
    <h2>CLASIFICACIÓN DEL GASTO POR CATEGORÍA PROGRAMÁTICA.<br/>¿EN QUÉ SE GASTA?</h2>
    <p>Esta clasificación describe de forma específica los programas o acciones del gobierno. Son propuestas que
      atienden a una problemática identificada y que tienen objetivos o metas, e insumos determinados. Su análisis
      permite conocer la asignación de recursos de cada una de las acciones proyectadas en el presupuesto. En
      orden de magnitud puede tratarse de programas, subprogramas, proyectos, actividades y obras.</p>
    <h2>CLASIFICACIÓN DEL GASTO POR FINALIDADES Y FUNCIONES.<br/>¿PARA QUÉ SE GASTA?</h2>
    <p>Esta clasificación presenta el gasto público según la naturaleza de los servicios que se brindan a la
      comunidad, permite identificar los objetivos perseguidos por el gasto público en términos generales y los
      medios para alcanzarlos. Cuando un gasto tenga potencialmente más de una función, entonces va a clasificarse
      según la función más relevante o significativa. Esta clasificación (que como siempre tendrá su correlato en
      una codificación numérica) se organiza en 5 finalidades (identificadas por el primer dígito de la
      clasificación), y en 30 funciones (identificadas por el segundo dígito). Más información en la sección
      Acerca De (link a Glosario dentro del Acerca De para conocer todas las finalidades y funciones).</p>
  </ContentSection>
);

module.exports = BudgetClassifications;
