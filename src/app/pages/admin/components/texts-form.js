const React = require('react');
const Texts = require('../../../../services/texts');

class TextsForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="monitor-content monitor-admin">
                <div className="monitor-admin-page-section">
                    <h2>Monitor</h2>
                    <h3>Título</h3>
                    <input value={Texts.content.monitor.title}/>
                    <h3>Descripción</h3>
                    <textarea>{Texts.content.monitor.description}</textarea>
                </div>

                <div className="monitor-admin-page-section">
                    <h2>Comparador</h2>
                    <h3>Título</h3>
                    <input value={Texts.content.comparator.title}/>
                    <h3>Descripción</h3>
                    <textarea>{Texts.content.comparator.description}</textarea>
                </div>
            </div>
        )
    }
}

module.exports = TextsForm;
