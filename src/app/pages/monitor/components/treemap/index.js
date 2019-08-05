const React = require('react');
const downloadChart = require('../../helpers/download-chart');
const downloadData = require('../../helpers/download-csv');
const Chart = require('./chart');
const axios = require('axios');

class Treemap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.downloadUserData = this.downloadUserData.bind(this);
    }

    componentDidMount() {
        this.downloadTreemapData();
    }

    componentDidUpdate() {
        if (this.props !== this.state.props) {
            this.downloadTreemapData();
        }
    }

    downloadTreemapData() {
        const {parentTable, parentName, year, budgetType} = this.props;
        const params = {parentTable, parentName, year, budgetType};
        axios.get('/api/db/treemap', {params})
            .then(response => this.setState({...response.data, props: this.props}));
    }

    static downloadImage() {
        downloadChart('.monitor-treemap svg', 'treemap.png');
    }

    downloadUserData() {
        downloadData(this.state.data, 'treemap.csv');
    }

    render() {

        return (
            <div className="monitor-content monitor-treemap">
                <div className="monitor-treemap-chart-container">
                    {this.state.data && <Chart data={this.state.data}/>}
                </div>
                <div id="monitor-treemap-controls">
                    <span className="monitor-link" onClick={this.downloadUserData}>Descargar datos</span>
                    <span className="monitor-link" onClick={Treemap.downloadImage}>Descargar gráfico</span>
                </div>
            </div>
        )
    }
}

module.exports = Treemap;
