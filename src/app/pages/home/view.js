const React = require('react');
const Page = require('../../components/page');
const PropTypes = require('prop-types');

const App = ({ pageName }) => (
  <Page pageName={pageName}>
    <a href="/monitor" id="home-link">
      <img id="background-768" src="/static/portada-768.jpg" alt="Monitor presupuestario" />
      <div id="background-1920" />
    </a>
  </Page>
);

App.propTypes = {
  pageName: PropTypes.string.isRequired,
}

module.exports = App;
