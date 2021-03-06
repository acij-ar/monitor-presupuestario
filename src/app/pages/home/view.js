const React = require('react');
const Page = require('../../components/page');
const PropTypes = require('prop-types');

const App = ({pageName}) => (
  <Page pageName={pageName}>
    <h1>Monitor<br />Presupuestario</h1>
    <p>
      Te damos la bienvenida al Monitor Presupuestario, una plataforma donde podrás conocer y explorar los datos sobre
      el presupuesto nacional desde el año 2007 para realizar tu propio monitoreo sobre cómo se distribuyen los recursos
      del Estado en la Argentina.
    </p>
    <div id="home-actions">
      <a id="budget-link" href="/el-presupuesto">¿Qué es el presupuesto?</a>
      <a id="budget-explore-link" href="/monitor/explorar">Ir al Monitor</a>
    </div>
  </Page>
);

App.propTypes = {
  pageName: PropTypes.string.isRequired,
};

module.exports = App;
