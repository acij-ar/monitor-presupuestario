const React = require('react');
const Page = require('../../components/page');
const ContentSection = require('../../components/content-section');
const PropTypes = require('prop-types');
const Term = require('./components/term');
const terms = require('./terms');

const App = ({pageName}) => (
  <Page pageName={pageName}>
    <div id="glosary-main-content">
      <ContentSection id="glosary-main-content" title="Glosario" />
      {
        terms.map(term => (
          <Term key={term.name} {...term} />
        ))
      }
    </div>
  </Page>
);

App.propTypes = {
  pageName: PropTypes.string.isRequired,
};

module.exports = App;
