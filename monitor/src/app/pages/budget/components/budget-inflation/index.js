const React = require('react');
const ContentSection = require('../../../../components/content-section');

const BudgetInflation = () => (
  <ContentSection id="budget-inflation" title="Cómo se ajusta a la inflación">
    <p>En el caso de países con altas tasas de inflación como Argentina, para hacer comparaciones de gastos en distintos
      periodos de tiempo es necesario hacer un “ajuste por inflación” de las cifras, de modo que ellas puedan ser
      comparadas a lo largo de los años en “términos reales” (de no “ajustarse”, los números no serían estrictamente
      comparables debido a los aumentos de precios registrados en un determinado periodo).</p>
    <p>Las cifras ya ajustadas por inflación suelen denominarse “reales” (respecto de los bienes y servicios que
      efectivamente se pueden comprar con el dinero) o “a precios constantes” (considerando que cifras corresponden
      todas a un determinado momento). Las cifras sin ajustar pueden denominarse como cifras en “términos nominales” o
      “a precios corrientes”. En todos los casos, si se hace un análisis que involucra períodos de tiempo de más de un
      año, sugerimos que se indique cuáles de estas cifras se utilizó.</p>
    <p>El Monitor Presupuestario mostramos las cantidades del presupuesto “nominal” así como las cifras “reales”
      ajustadas a la inflación. Esto se puede encender y apagar de acuerdo con el análisis que se desee realizar.</p>
  </ContentSection>
);

module.exports = BudgetInflation;
