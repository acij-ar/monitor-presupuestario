const React = require('react');
const axios = require('axios');
require('./dataset-form.scss');
const DatasetTable = require('./dataset-table');

class DatasetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      processingDatasets: false,
      updateError: false,
      saveSuccessfull: false,
      datasets: [],
      step: null,
    };
    this.checkStatus = this.checkStatus.bind(this);
    this.updateDatasets = this.updateDatasets.bind(this);
  }

  componentDidMount() {
    axios.get('/api/admin/dataset_job_status').then(({ data }) => this.setState({ datasets: data.result }))
  }

  updateDatasets() {
    this.setState({
      processingDatasets: true,
      updateError: false,
      saveSuccessfull: false,
    });
    axios.post(`/api/admin/update_datasets`)
      .then(this.checkStatus)
      .catch(() => {
        this.setState({
          processingDatasets: false,
          updateError: true,
        });
      });
  }

  checkStatus() {
    axios.get('/api/admin/dataset_job_status')
      .then(({data}) => {
        if (data.result) {
          this.setState({
            datasets: data.result,
            processingDatasets: false,
            saveSuccessfull: true,
          });
        } else {
          setTimeout(this.checkStatus, 5e3);
          this.setState({step: data.step});
        }
      })
      .catch(() => {
        setTimeout(this.checkStatus, 5e3);
      });
  }

  render() {
    const {datasets, processingDatasets, updateError, saveSuccessfull} = this.state;
    const canUpdate = datasets.length && datasets.find(dataset => !dataset.isUpToDate);
    return (
      <div className="monitor-content monitor-admin">
        <div className="monitor-admin-page-section">
          <h2>Datasets</h2>
          { datasets.length ? <DatasetTable datasets={datasets} /> : 'Cargando...' }
          { canUpdate ?
            <button disabled={processingDatasets} onClick={this.updateDatasets}>
              Actualizar datasets
            </button> : null }
          <div>
            {processingDatasets && this.state.step}
            {saveSuccessfull && 'Descarga exitosa ✅'}
            {updateError && 'Error al descargar ❌'}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = DatasetForm;
