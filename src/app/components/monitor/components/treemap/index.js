const React = require('react');
const _ = require('lodash');
const availableYears = require('../../../../helpers/available-years');
const availableKeys = require('../../../../helpers/available-keys');
const downloadChart = require('../../../../helpers/download-chart');
const downloadData = require('../../../../helpers/download-csv');
const Chart = require('./chart');

class Treemap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedYear: availableYears[availableYears.length - 1],
            selectedKey: availableKeys[0].key,
        };
        this.state.data = this.dataForState();

        this.onYearChange = this.onYearChange.bind(this);
        this.onKeyChange = this.onKeyChange.bind(this);
        this.downloadData = this.downloadData.bind(this);
    }

    dataForState() {
        const dataForYear = this.props.data[this.state.selectedYear];
        const sortedYearData = _.sortBy(dataForYear, dataPoint => -dataPoint[this.state.selectedKey]);
        const dataRows = sortedYearData.map(dataPoint => [dataPoint.name, "root", dataPoint[this.state.selectedKey]]);
        return [['name', 'parent', 'value'], ['root', null, _.sum(dataRows.map(row => row[2]))], ...dataRows]
    }

    setDataForState() {
        this.state.data = this.dataForState();
        this.setState(this.state);
    }

    onYearChange(e) {
        this.state.selectedYear = e.target.value;
        this.setDataForState();
    }

    onKeyChange(e) {
        this.state.selectedKey = e.target.value;
        this.setDataForState();
    }

    static downloadImage() {
        downloadChart('.monitor-treemap svg', 'treemap.png');
    }

    downloadData() {
        downloadData(this.state.data, 'treemap.csv');
    }

    render() {

        return (
            <React.Fragment>
                <div id="monitor-treemap-controls">
                    <select onChange={this.onYearChange} defaultValue={this.state.selectedYear}>
                        { availableYears.map(year => (
                            <option key={year} defaultValue={year}>
                                { year }
                            </option>
                        ))}
                    </select>
                    <select onChange={this.onKeyChange} defaultValue={this.state.selectedKey}>
                        { availableKeys.map(({ key, name }) => (
                            <option key={key} value={key}>
                                { name }
                            </option>
                        ))}
                    </select>
                    <span className="monitor-link" onClick={this.downloadData}>Descargar datos</span>
                    <span className="monitor-link" onClick={Treemap.downloadImage}>Descargar gráfico</span>
                </div>
                <Chart data={this.state.data} />
            </React.Fragment>
        )
    }
}

module.exports = Treemap;
