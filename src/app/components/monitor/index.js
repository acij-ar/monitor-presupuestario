const React = require('react');
const Page = require('../page');
const { Treemap, ResponsiveContainer } = require('recharts');
require('./index.scss');

const App = ({ data }) => (
    <Page>
        <div className="monitor-highlight">
            <div className="monitor-content">
                <h1>Monitor</h1>
                <p>
                    En esta sección podés comparar la participación de las asignaciones presupuestarias nacionales por
                    jurisdicción, programa o actividad desde el año 2007 en relación con el presupuesto total para el
                    año seleccionado. El treemap mostrará la participación de la jurisdicción seleccionada en relación
                    a todas las jurisdicciones, del programa dentro de su jurisdicción, y de la actividad respecto del
                    programa al que pertenece. La información se encuentra sistematizada tal como el Estado Nacional la
                    publica en su sitio de Presupuesto Abierto.
                </p>
            </div>
        </div>

        <div className="monitor-content monitor-treemap">
            <ResponsiveContainer width="100%" aspect={3}>
                {/* TODO: add placeholder for client first load */}
                <Treemap
                    data={data}
                    dataKey="credito_vigente"
                    ratio={4 / 3}
                    stroke="#fff"
                    fill="#8884d8"
                    isAnimationActive={false}
                />
            </ResponsiveContainer>
        </div>
    </Page>
);

module.exports = App;
