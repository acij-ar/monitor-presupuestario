const React = require('react');
const axios = require('axios');
require('./dataset-form.scss');
const DatasetTable = require('./dataset-table');

class DatasetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      processingDataset: false,
      updateError: false,
      saveSuccessfull: false,
      datasets: [],
      step: null,
    };
    this.checkStatus = this.checkStatus.bind(this);
  }

  componentDidMount() {
    this.checkStatus();
  }

  updateDataset(dataset) {
    this.setState({
      processingDataset: true,
      updateError: false,
      saveSuccessfull: false,
    });
    axios.post(`/api/admin/update_dataset/${dataset}`)
      .then(this.checkStatus)
      .catch(() => {
        this.setState({
          processingDataset: false,
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
            processingDataset: false,
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
    const {datasets, processingDataset, updateError, saveSuccessfull} = this.state;
    return (
      <div className="monitor-content monitor-admin">
        <div className="monitor-admin-page-section">
          <h2>Datasets</h2>
          { datasets.length ? <DatasetTable datasets={datasets} /> : 'Cargando...' }
          <div>
            {processingDataset && this.state.step}
            {saveSuccessfull && 'Descarga exitosa ✅'}
            {updateError && 'Error al descargar ❌'}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = DatasetForm;
