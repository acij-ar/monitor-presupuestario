const React = require('react');
const axios = require('axios');

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
                    {datasets.map(({filename}) => (
                        <p key={filename}>
                            <span>{filename}: </span>
                            <button onClick={() => this.updateDataset(filename)}>Actualizar</button>
                        </p>
                    ))}
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
