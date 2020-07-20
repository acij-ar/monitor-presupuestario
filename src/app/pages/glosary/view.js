const React = require('react');
const Page = require('../../components/page');
const PropTypes = require('prop-types');

const App = ({pageName}) => (
  <Page pageName={pageName}>
    <div id="glosary-main-content">
      Glosario
    </div>
  </Page>
);

App.propTypes = {
  pageName: PropTypes.string.isRequired,
};

module.exports = App;
