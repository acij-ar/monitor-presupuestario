const React = require('react');
const Page = require('../page');
require('./index.scss');

const App = () => (
    <Page>
        <div className="monitor-highlight">
            <div className="monitor-content">
                <h1>Comparador</h1>
                <p>
                    En esta sección podés comparar las asignaciones presupuestarias nacionales por jurisdicción,
                    programa o actividad desde el año 2007 en relación con otras jurisdicciones, programas o
                    actividades. Podés seleccionar el presupuesto distribuido por el PEN, el presupuesto vigente y el
                    presupuesto devengado, ajustados por inflación.
                </p>
            </div>
        </div>

        <div className="monitor-content monitor-comparator">
        </div>
    </Page>
);

module.exports = App;
