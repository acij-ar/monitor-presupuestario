const React = require('react');
const axios = require('axios');
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

  async componentDidMount() {
    const { data } = await axios.get('/api/admin/dataset_job_status');
    this.setState({ datasets: data.result });
  }

  async updateDatasets() {
    this.setState({
      processingDatasets: true,
      updateError: false,
      saveSuccessfull: false,
    });
    try {
      await axios.post('/api/admin/update_datasets');
      this.checkStatus();
    } catch(e) {
      this.setState({
        processingDatasets: false,
        updateError: true,
      });
    }
  }

  async checkStatus() {
    try {
      const { data } = await axios.get('/api/admin/dataset_job_status');
      if (data && data.result) {
        this.setState({
          datasets: data.result,
          processingDatasets: false,
          saveSuccessfull: true,
        });
      } else {
        setTimeout(this.checkStatus, 5e3);
        this.setState({step: data.step});
      }
    } catch(e) {
      setTimeout(this.checkStatus, 5e3);
    }
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
