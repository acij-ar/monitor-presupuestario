const React = require('react');
const ContentSection = require('../../../../components/content-section');

const BudgetClassifications = () => (
  <ContentSection id="budget-classifications-main-content" title="Clasificaciones">
    <p>La información presupuestaria contenida en los distintos documentos puede organizarse y clasificarse de muchas
      formas, que serán más o menos útiles según el análisis que se quiera hacer. Las clasificaciones presupuestarias
      son formas de agrupar u ordenar los recursos y gastos según diferentes criterios, que responden algunas preguntas
      básicas: ¿Quién gasta?, ¿En qué se gasta?, ¿Para qué se gasta?, o ¿Dónde se gasta?.</p>
    <p>El detalle de las clasificaciones se ve en las distintas planillas o tablas, que nos permitirán encontrar con
      facilidad la información relevante para nuestro análisis. A continuación presentamos las clasificaciones más
      útiles para conocer rápidamente
      el presupuesto:</p>
  </ContentSection>
);

module.exports = BudgetClassifications;
