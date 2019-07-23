const React = require('react');

class TextsForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { texts } = this.props;
        return (
            <div className="monitor-content monitor-admin">
                <div className="monitor-admin-page-section">
                    <h2>Monitor</h2>
                    <h3>Título</h3>
                    <input defaultValue={texts.monitor.title}/>
                    <h3>Descripción</h3>
                    <textarea>{texts.monitor.description}</textarea>
                </div>

                <div className="monitor-admin-page-section">
                    <h2>Comparador</h2>
                    <h3>Título</h3>
                    <input value={texts.comparator.title}/>
                    <h3>Descripción</h3>
                    <textarea>{texts.comparator.description}</textarea>
                </div>
            </div>
        )
    }
}

module.exports = TextsForm;
