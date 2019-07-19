const React = require('react');
const { Treemap: RechartsTreemap, ResponsiveContainer } = require('recharts');
const _ = require('lodash');
const availableYears = require('../../../helpers/available-years');
const availableKeys = require('../../../helpers/available-keys');
const downloadChart = require('../../../helpers/download-chart');
const downloadData = require('../../../helpers/download-csv');

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
        return _.sortBy(dataForYear, dataPoint => -dataPoint[this.state.selectedKey]);
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
        const rows = [
            ["nombre", "valor"],
            ...this.state.data.map(dataPoint => [dataPoint.name, dataPoint[this.state.selectedKey]])
        ];
        downloadData(rows, 'treemap.csv');
    }

    render() {

        return (
            <React.Fragment>
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
                <ResponsiveContainer width="100%" aspect={3}>
                    {/* TODO: add placeholder for client first load */}
                    <RechartsTreemap
                        data={this.state.data}
                        dataKey={this.state.selectedKey}
                        ratio={4 / 3}
                        stroke="#fff"
                        fill="#8884d8"
                        isAnimationActive={false}
                    />
                </ResponsiveContainer>
                <div className="monitor-treemap-download">
                    <span className="monitor-link" onClick={this.downloadData}>Descargar datos</span>
                    <span className="monitor-link" onClick={Treemap.downloadImage}>Descargar gráfico</span>
                </div>
            </React.Fragment>
        )
    }
}

module.exports = Treemap;
