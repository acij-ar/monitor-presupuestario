const React = require('react');
const axios = require('axios');

class TextsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            texts: props.texts,
        };
        this.saveTexts = this.saveTexts.bind(this);
    }

    onTextChange() {
        this.state.saveError = false;
        this.state.saveSuccessfull = false;
        this.setState(this.state);
    }

    saveTexts() {
        this.onTextChange();
        const texts = this.state.texts;
        axios.post('/api/admin/texts', { texts })
            .then(() => {
                this.state.saveSuccessfull = true;
                this.setState(this.state);
            })
            .catch(() => {
                this.state.saveError = true;
                this.setState(this.state);
            })
    }

    render() {
        const { texts } = this.props;
        return (
            <div className="monitor-content monitor-admin">
                <div className="monitor-admin-page-section">
                    <h2>Monitor</h2>
                    <h3>Título</h3>
                    <input value={texts.monitor.title} onChange={e => {
                        this.state.texts.monitor.title = e.target.value;
                        this.onTextChange();
                    }}/>
                    <h3>Descripción</h3>
                    <textarea value={texts.monitor.description} onChange={e => {
                        this.state.texts.monitor.description = e.target.value;
                        this.onTextChange();
                    }}/>
                </div>

                <div className="monitor-admin-page-section">
                    <h2>Acerca de</h2>
                    <h3>Presupuesto para los derechos</h3>
                    <input value={texts.about.rights.title} onChange={e => {
                        this.state.texts.about.rights.title = e.target.value;
                        this.onTextChange();
                    }}/>
                    <h3>Contenido</h3>
                    <textarea value={texts.about.rights.content} onChange={e => {
                        this.state.texts.about.rights.content = e.target.value;
                        this.onTextChange();
                    }}/>

                    <h3>Metodologia</h3>
                    <input value={texts.about.methodology.title} onChange={e => {
                        this.state.texts.about.methodology.title = e.target.value;
                        this.onTextChange();
                    }}/>
                    <h3>Contenido</h3>
                    <textarea value={texts.about.methodology.content} onChange={e => {
                        this.state.texts.about.methodology.content = e.target.value;
                        this.onTextChange();
                    }}/>

                    <h3>Publicación de la información</h3>
                    <input value={texts.about.information.title} onChange={e => {
                        this.state.texts.about.information.title = e.target.value;
                        this.onTextChange();
                    }}/>
                    <h3>Contenido</h3>
                    <textarea value={texts.about.information.content} onChange={e => {
                        this.state.texts.about.information.content = e.target.value;
                        this.onTextChange();
                    }}/>

                    <h3>Glosario</h3>
                    <input value={texts.about.dictionary.title} onChange={e => {
                        this.state.texts.about.dictionary.title = e.target.value;
                        this.onTextChange();
                    }}/>
                    <h3>Contenido</h3>
                    <textarea value={texts.about.dictionary.content} onChange={e => {
                        this.state.texts.about.dictionary.content = e.target.value;
                        this.onTextChange();
                    }}/>
                </div>


                <button onClick={this.saveTexts}>Guardar</button>
                { this.state.saveSuccessfull && <span>✅</span>}
                { this.state.saveError && <span>❌</span>}
            </div>
        )
    }
}

module.exports = TextsForm;
