const React = require('react');
const axios = require('axios');
const PropTypes = require('prop-types');

class TextsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: props.texts,
    };
    this.saveTexts = this.saveTexts.bind(this);
  }

  resetSavedTextsState() {
    this.setState({
      saveError: false,
      saveSuccessfull: false,
    });
  }

  async saveTexts() {
    this.resetSavedTextsState();
    const { texts } = this.state;
    try {
      await axios.post('/api/admin/texts', { texts });
      this.setState({ saveSuccessfull: true });
    } catch (e) {
      console.log(e);
      this.setState({ saveError: true });
    }
  }

  render() {
    const { texts } = this.props;
    return (
      <div className="monitor-content monitor-admin">
        <div className="monitor-admin-page-section">
          <h2>Monitor</h2>
          <h3>Título</h3>
          <input id="monitor-title" value={texts.monitor.title} onChange={e => {
            this.state.texts.monitor.title = e.target.value;
            this.resetSavedTextsState();
          }}/>
          <h3>Descripción</h3>
          <textarea id="monitor-description" value={texts.monitor.description} onChange={e => {
            this.state.texts.monitor.description = e.target.value;
            this.resetSavedTextsState();
          }}/>
        </div>

        <div className="monitor-admin-page-section">
          <h2>Acerca de</h2>
          <h3>Presupuesto para los derechos</h3>
          <input id="rights-title" value={texts.about.rights.title} onChange={e => {
            this.state.texts.about.rights.title = e.target.value;
            this.resetSavedTextsState();
          }}/>
          <h3>Contenido</h3>
          <textarea id="rights-content" value={texts.about.rights.content} onChange={e => {
            this.state.texts.about.rights.content = e.target.value;
            this.resetSavedTextsState();
          }}/>

          <h3>Metodologia</h3>
          <input id="methodology-title" value={texts.about.methodology.title} onChange={e => {
            this.state.texts.about.methodology.title = e.target.value;
            this.resetSavedTextsState();
          }}/>
          <h3>Contenido</h3>
          <textarea id="methodology-content" value={texts.about.methodology.content} onChange={e => {
            this.state.texts.about.methodology.content = e.target.value;
            this.resetSavedTextsState();
          }}/>

          <h3>Publicación de la información</h3>
          <input id="information-title" value={texts.about.information.title} onChange={e => {
            this.state.texts.about.information.title = e.target.value;
            this.resetSavedTextsState();
          }}/>
          <h3>Contenido</h3>
          <textarea id="information-content" value={texts.about.information.content} onChange={e => {
            this.state.texts.about.information.content = e.target.value;
            this.resetSavedTextsState();
          }}/>

          <h3>Glosario</h3>
          <input id="dictionary-title" value={texts.about.dictionary.title} onChange={e => {
            this.state.texts.about.dictionary.title = e.target.value;
            this.resetSavedTextsState();
          }}/>
          <h3>Contenido</h3>
          <textarea id="dictionary-content" value={texts.about.dictionary.content} onChange={e => {
            this.state.texts.about.dictionary.content = e.target.value;
            this.resetSavedTextsState();
          }}/>
        </div>


        <button onClick={this.saveTexts}>Guardar</button>
        { this.state.saveSuccessfull && <span>✅</span>}
        { this.state.saveError && <span>❌</span>}
      </div>
    );
  }
}

TextsForm.propTypes = {
  texts: PropTypes.shape({
    monitor: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    about: PropTypes.shape({
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
    }).isRequired,
  }).isRequired,
};

module.exports = TextsForm;
