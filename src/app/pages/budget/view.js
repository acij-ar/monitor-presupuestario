const React = require('react');
const Page = require('../../components/page');
const PropTypes = require('prop-types');

const App = ({pageName}) => (
  <Page pageName={pageName}>
    <div id="budget-main-content">

      <div id="what-is-the-budget">
        <h1 className="section-title">¿Qué es?</h1>
        <div className="section-content">
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
        </div>
      </div>

      <div id="budget-cycle">
        <h1 className="section-title">El ciclo del presupuesto</h1>
        <div className="section-content">
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
        </div>
      </div>

      <ol id="budget-steps">
        <li>
          <div>
            <h2>Formulación del Presupuesto.</h2>
            <p> El Poder Ejecutivo (PEN) envía una propuesta al Congreso el 15 de septiembre de cada año, en donde estima
              los recursos, los gastos y la producción de bienes y servicios que requerirá para implementar políticas
              públicas. Esta estimación se hace junto con los Organismos de la Administración Pública Nacional, que
              preparan el anteproyecto, y la Oficina Nacional de Presupuesto, que coordina la formulación final del
              proyecto de ley. </p>
          </div>
        </li>
        <li>
          <div>
            <h2>Discusión y aprobación de la Ley</h2>
            <p>El Poder Legislativo es el responsable de discutir el proyecto de ley enviado por el Ejecutivo, realizar
              las
              modificaciones que le parezcan necesarias, y de aprobar la ley que defina los ingresos y gastos públicos del
              año siguiente. Sus pasos son

              El proyecto ingresa por la Cámara de Diputadas/os y el debate inicia en la Comisión de Presupuesto y
              Hacienda, que se encuentra facultada para consultar a las autoridades del Ejecutivo.
              La Comisión remite un dictamen a la Cámara y ésta, por decisión de la mayoría, puede aprobar el proyecto o
              realizarle modificaciones. Si la Cámara de Diputadas/os dispone aprobar el proyecto de ley, lo remite al
              Senado para su tratamiento.
              El Congreso sanciona la Ley de Presupuesto para el año siguiente.
              Se transforma en Ley con su promulgación por el Ejecutivo y se publica en el Boletín Oficial. El presupuesto
              aprobado por el Congreso suele denominarse “original” o “sancionado”.</p>
          </div>
        </li>
        <li>
          <div>
            <h2>Ejecución Presupuestaria</h2>
            <p> El Poder Ejecutivo es el encargado de ejecutar el presupuesto sancionado por el Congreso. Las
              reasignaciones o modificaciones presupuestarias durante su ejecución sólo puede realizarlas el Poder
              Legislativo, de conformidad con el principio de división de poderes, que le otorga al Congreso la función
              exclusiva de legislar y fijar anualmente el presupuesto nacional. Sin embargo, el PEN suele incumplir la
              Constitución, modificar el presupuesto y no implementarlo tal como fue aprobado, sin ninguna consecuencia.
              El Monitoreo Presupuestario nos permite por lo menos tener una visión clara de estos cambios y levantar la
              voz al respecto. </p>
          </div>
        </li>
        <li>
          <div>
            <h2>Control y Rendición de cuentas</h2>
            <p>La ejecución presupuestaria está sujeta a la evaluación realizada por la Oficina Nacional Presupuesto, que
              analiza trimestralmente si el presupuesto, las actividades y las metas se están implementando tal como
              fueron diseñadas en la ley de presupuesto, informa el crédito vigente para cada uno de los gastos previstos,
              cuánto dinero se comprometió y cuánto se ejecutó. La Auditoría General de la Nación lleva adelante controles
              externos y la Sindicatura General de la Nación y Unidades de Auditoría Interna (UAI) los controles internos
              de la ejecución presupuestaria.</p>
          </div>
        </li>
      </ol>

    </div>
  </Page>
);

App.propTypes = {
  pageName: PropTypes.string.isRequired,
};

module.exports = App;
