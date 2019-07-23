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
                    <h2>Comparador</h2>
                    <h3>Título</h3>
                    <input value={texts.comparator.title} onChange={e => {
                        this.state.texts.comparator.title = e.target.value;
                        this.onTextChange();
                    }}/>
                    <h3>Descripción</h3>
                    <textarea value={texts.comparator.description} onChange={e => {
                        this.state.texts.comparator.description = e.target.value;
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
