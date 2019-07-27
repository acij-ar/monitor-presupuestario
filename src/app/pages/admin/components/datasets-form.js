const React = require('react');
const axios = require('axios');
require('./dataset-form.scss');

class DatasetForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            processingDataset: false,
            updateError: false,
            saveSuccessfull: false,
        };
    }

    updateDataset(dataset) {
        this.state.updateError = false;
        this.state.saveSuccessfull = false;
        this.setState(this.state);
        axios.post(`/api/admin/update_dataset/${dataset}`)
            .then(() => {
                this.state.processingDataset = true;
                this.setState(this.state);
            })
            .catch(() => {
                this.state.updateError = true;
                this.setState(this.state);
            })
    }

    render() {
        const {datasets} = this.props;
        return (
            <div className="monitor-content monitor-admin">
                <div className="monitor-admin-page-section">
                    <h2>Datasets</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Dataset</th>
                            <th>Número de filas</th>
                            <th>Última actualización</th>
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                        {datasets.map(({filename, lastModified, lines}) => (
                            <tr key={filename}>
                                <td>{filename}</td>
                                <td>{lines || '-'}</td>
                                <td>{lastModified || '-'}</td>
                                <td>
                                    <button onClick={() => this.updateDataset(filename)}>
                                        {lines ? 'Actualizar' : 'Descargar'}
                                    </button>
                                </td>
                            </tr>

                        ))}
                        </tbody>
                    </table>
                    <div>
                        {this.state.saveSuccessfull && <span>✅</span>}
                        {this.state.saveError && <span>❌</span>}
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = DatasetForm;
