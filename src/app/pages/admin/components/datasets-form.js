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
            datasets: this.props.datasets,
            step: null,
        };
        this.checkStatus = this.checkStatus.bind(this);
    }

    updateDataset(dataset) {
        this.state.processingDataset = true;
        this.state.updateError = false;
        this.state.saveSuccessfull = false;
        this.setState(this.state);
        axios.post(`/api/admin/update_dataset/${dataset}`)
            .then(this.checkStatus)
            .catch(() => {
                this.state.processingDataset = false;
                this.state.updateError = true;
                this.setState(this.state);
            })
    }

    checkStatus() {
        axios.get('/api/admin/dataset_job_status')
            .then(({data}) => {
                if (data.result) {
                    this.setState({
                        datasets: data.result,
                        processingDataset: false,
                        saveSuccessfull: true,
                    })
                } else {
                    setTimeout(this.checkStatus, 5e3);
                    this.setState({step: data.step});
                }
            })
            .catch(() => {
                setTimeout(this.checkStatus, 5e3)
            })
    }

    render() {
        const {datasets, processingDataset, updateError, saveSuccessfull} = this.state;
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
                                    <button onClick={() => this.updateDataset(filename)} disabled={processingDataset}>
                                        {lines ? 'Actualizar' : 'Descargar'}
                                    </button>
                                </td>
                            </tr>

                        ))}
                        </tbody>
                    </table>
                    <div>
                        {processingDataset && this.state.step}
                        {saveSuccessfull && 'Descarga exitosa ✅'}
                        {updateError && 'Error al descargar ❌'}
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = DatasetForm;
