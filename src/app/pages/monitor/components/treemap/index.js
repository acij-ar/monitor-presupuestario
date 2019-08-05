const React = require('react');
const downloadChart = require('../../helpers/download-chart');
const downloadData = require('../../helpers/download-csv');
const Chart = require('./chart');
const axios = require('axios');

class Treemap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.downloadData = this.downloadData.bind(this);
    }

    componentDidMount() {
        const params = this.props;
        axios.get('/api/db/treemap', {params})
    }

    static downloadImage() {
        downloadChart('.monitor-treemap svg', 'treemap.png');
    }

    downloadData() {
        downloadData(this.state.data, 'treemap.csv');
    }

    render() {

        return (
            <div className="monitor-content monitor-treemap">
                <Chart data={this.state.data}/>
                <div id="monitor-treemap-controls">
                    <span className="monitor-link" onClick={this.downloadData}>Descargar datos</span>
                    <span className="monitor-link" onClick={Treemap.downloadImage}>Descargar gráfico</span>
                </div>
            </div>
        )
    }
}

module.exports = Treemap;
