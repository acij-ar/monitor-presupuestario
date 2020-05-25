const React = require('react');
const ContentSection = require('../../../../components/content-section');

const BudgetAnalysis = () => (
  <ContentSection id="budget-analysis" title="El Análisis Presupuestario">
    <p>Para realizar análisis presupuestario es necesario saber qué estamos buscando, podemos acercarnos a mirar
      globalmente el impacto del gasto o analizar de manera focalizada los programas y actividades que afectan de manera
      particular los temas que nos interesan.</p>
    <p>Una vez elegido el enfoque del análisis, por ejemplo, si estamos haciendo un análisis con perspectiva de género,
      podemos tratar de encontrar qué parte del presupuesto está destinado explícitamente a la igualdad de género, o en
      qué medida el presupuesto tiende a profundizar o a reducir las brechas entre los diversos géneros.</p>
    <p>Una desventaja de este enfoque es que, en algunas ocasiones, podemos perdernos de vista programas o actividades
      que serían importantes pero no son realizadas por una institución que nos vendría a la mente para nuestro tema
      inmediatamente.</p>
    <p>Otra opción es elegir un problema o tema específico que se considere especialmente relevante para nuestros temas
      de trabajo e identificar qué áreas de gobierno realizan acciones para resolverlo o atenderlo. En la sección de
      Comparar del Monitor Presupuestario se pueden a analizar las políticas públicas, programas y actividades
      desarrolladas en las diferentes áreas, estén o no etiquetadas como actividades para evaluar su asignación
      presupuestaria a lo largo de los años, y realizar diferentes comparaciones que se consideren relevantes.</p>
  </ContentSection>
);

module.exports = BudgetAnalysis;







