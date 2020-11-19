const React = require('react');
const PropTypes = require('prop-types');
const DataClient = require('../../helpers/data-client');

const joinYears = (years) => {
  const firstYears = years.slice(0, -1);
  const lastYear = years[years.length - 1];
  return `${firstYears.join(', ')} y ${lastYear}`
}

const { useEffect, useState } = React;
const dataClient = new DataClient({ url: '/api/data/reasignations' });

const ReasignationDisclaimer = ({params}) => {
  const [hasReasignations, setHasReasignations] = useState({});
  const [loading, setLoading] = useState(true);

  const dataCallback = (data) => {
    setLoading(false);
    setHasReasignations(data.modified);
  };

  useEffect(() => {
    if (params && (params.year || params.years)) {
      setLoading(true);
      dataClient.get(params, dataCallback);
    } else {
      dataClient.cancelRequest();
    }
  }, [params]);

  return (
    !loading && hasReasignations ? <p id="reasignation-disclaimer">
      {
        params.years ?
          `Las leyes de presupuesto de los años ${joinYears(params.years)} asignaron un presupuesto mayor al proyectado
         en una categoría superior a la seleccionada y su distribución no fue detallada en este nivel. Te recomendamos
         consultar el presupuesto vigente y leer el el artículo 16 de la ley de presupuesto de ese año para observar
         el aumento al que nos referimos.` :
          params.year ? `La ley de presupuesto del año ${params.year} asignó un presupuesto mayor al proyectado en una categoría
        superior a la seleccionada y su distribución no fue detallada en este nivel. Te recomendamos consultar el
        presupuesto vigente y leer el el artículo 16 de la ley de presupuesto de ese año para observar el aumento
        al que nos referimos.` : null
      }
    </p> : null
  )
};

ReasignationDisclaimer.propTypes = {
  params: PropTypes.shape({
    years: PropTypes.array,
    year: PropTypes.number,
  }).isRequired,
}

module.exports = ReasignationDisclaimer;
