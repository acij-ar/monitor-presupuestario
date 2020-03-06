const React = require('react');
const Page = require('../../components/page');
const PropTypes = require('prop-types');

const App = ({ rights, methodology, information, dictionary }) => (
  <Page>
    <div className="monitor-highlight">
      <div className="monitor-content">
        <h1>Acerca de</h1>
      </div>
    </div>
    <input type="radio" id="monitor-about-presupuesto" name="menu" className="monitor-about-radio-button"
      defaultChecked/>
    <input type="radio" id="monitor-about-metodologia" name="menu" className="monitor-about-radio-button"/>
    <input type="radio" id="monitor-about-publicacion" name="menu" className="monitor-about-radio-button"/>
    <input type="radio" id="monitor-about-glosario" name="menu" className="monitor-about-radio-button"/>
    <div className="monitor-content monitor-about-menu">
      <label htmlFor="monitor-about-presupuesto">Presupuesto para los derechos</label>
      <label htmlFor="monitor-about-metodologia">Metodología</label>
      <label htmlFor="monitor-about-publicacion">Publicación de información</label>
      <label htmlFor="monitor-about-glosario">Glosario</label>
    </div>

    <div className="monitor-content monitor-about-bugdet">
      <h2>{ rights.title }</h2>
      <div dangerouslySetInnerHTML={{__html: rights.content}} />
    </div>

    <div className="monitor-content monitor-about-metodologia">
      <h2>{ methodology.title }</h2>
      <div dangerouslySetInnerHTML={{__html: methodology.content}} />
    </div>

    <div className="monitor-content monitor-about-publicacion">
      <h2>{ information.title }</h2>
      <div dangerouslySetInnerHTML={{__html: information.content}} />
    </div>

    <div className="monitor-content monitor-about-glosario">
      <h2>{ dictionary.title }</h2>
      <div dangerouslySetInnerHTML={{__html: dictionary.content}} />
    </div>
  </Page>
);

App.propTypes = {
  rights: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  methodology: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  information: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  dictionary: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

module.exports = App;
