const React = require('react');

const BudgetSteps = () => (
  <ol id="budget-steps">
    <li>
      <div>
        <h2>Formulación del Presupuesto.</h2>
        <p>El Poder Ejecutivo (PEN) envía una propuesta al Congreso el 15 de septiembre de cada año, en donde estima
          los recursos, los gastos y la producción de bienes y servicios que requerirá para implementar políticas
          públicas. Esta estimación se hace junto con los Organismos de la Administración Pública Nacional, que preparan
          el anteproyecto, y la Oficina Nacional de Presupuesto, que coordina la formulación final del proyecto de
          ley.</p>
      </div>
    </li>
    <li>
      <div>
        <h2>Discusión y aprobación de la Ley</h2>
        <p>El Poder Legislativo es el responsable de discutir el proyecto de ley enviado por el Ejecutivo, realizar las
          modificaciones que le parezcan necesarias, y de aprobar la ley que defina los ingresos y gastos públicos del
          año siguiente. Sus pasos son
        </p>
        <ul>
          <li>El proyecto ingresa por la Cámara de Diputadas/os y el debate inicia en la Comisión de Presupuesto y
            Hacienda, que se encuentra facultada para consultar a las autoridades del Ejecutivo.
          </li>
          <li>La Comisión remite un dictamen a la Cámara y ésta, por decisión de la mayoría, puede aprobar el proyecto o
            realizarle modificaciones. Si la Cámara de Diputadas/os dispone aprobar el proyecto de ley, lo remite al
            Senado para su tratamiento.
          </li>
          <li>El Congreso sanciona la Ley de Presupuesto para el año siguiente.</li>
          <li>Se transforma en Ley con su promulgación por el Ejecutivo y se publica en el Boletín Oficial. El
            presupuesto aprobado por el Congreso suele denominarse “original” o “sancionado”.
          </li>
        </ul>
      </div>
    </li>
    <li>
      <div>
        <h2>Control y Rendición de cuentas</h2>
        <p>La ejecución presupuestaria está sujeta a la evaluación realizada por la Oficina Nacional Presupuesto, que
          analiza trimestralmente si el presupuesto, las actividades y las metas se están implementando tal como fueron
          diseñadas en la ley de presupuesto, informa el crédito vigente para cada uno de los gastos previstos, cuánto
          dinero se comprometió y cuánto se ejecutó. La Auditoría General de la Nación lleva adelante controles externos
          y la Sindicatura General de la Nación y Unidades de Auditoría Interna (UAI) los controles internos de la
          ejecución presupuestaria.</p>
      </div>
    </li>
    <li>
      <div>
        <h2>Ejecución Presupuestaria</h2>
        <p>El Poder Ejecutivo es el encargado de ejecutar el presupuesto sancionado por el Congreso. Las reasignaciones
          o modificaciones presupuestarias durante su ejecución sólo puede realizarlas el Poder Legislativo, de
          conformidad con el principio de división de poderes, que le otorga al Congreso la función exclusiva de
          legislar y fijar anualmente el presupuesto nacional. Sin embargo, el PEN suele incumplir la Constitución,
          modificar el presupuesto y no implementarlo tal como fue aprobado, sin ninguna consecuencia. El Monitoreo
          Presupuestario nos permite por lo menos tener una visión clara de estos cambios y levantar la voz al
          respecto.</p>
      </div>
    </li>
  </ol>
);

module.exports = BudgetSteps;
