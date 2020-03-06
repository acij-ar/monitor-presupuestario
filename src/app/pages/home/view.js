const React = require('react');
const Page = require('../../components/page');

const App = () => (
  <Page>
    <a href="/monitor" id="home-link">
      <img id="background-768" src="/static/portada-768.jpg" alt="Monitor presupuestario" />
      <div id="background-1920" />
    </a>
  </Page>
);

module.exports = App;
