const React = require('react');
const { Treemap: RechartsTreemap, ResponsiveContainer } = require('recharts');
const _ = require('lodash');
const years = require('../../../helpers/available-years');
const downloadChart = require('../../../helpers/download-chart');
const downloadData = require('../../../helpers/download-csv');

class Treemap extends React.Component {
    constructor(props) {
        super(props);
        const defaultYear = years[years.length - 1];
        this.state = {
            selectedYear: defaultYear,
            dataKey: 'credito_presupuestado',
        };
        this.state.data = this.dataForYear(defaultYear);
        this.onChange = this.onChange.bind(this);
        this.downloadData = this.downloadData.bind(this);
    }

    dataForYear(year) {
        const dataForYear = this.props.data[year];
        return _.sortBy(dataForYear, dataPoint => -dataPoint[this.state.dataKey]);
    }

    onChange(e) {
        const selectedYear = e.target.value;
        this.setState({
            selectedYear,
            data: this.dataForYear(selectedYear),
        });
    }

    static downloadImage() {
        downloadChart('.monitor-treemap svg', 'treemap.png');
    }

    downloadData() {
        const rows = [
            ["nombre", "valor"],
            ...this.state.data.map(dataPoint => [dataPoint.name, dataPoint[this.state.dataKey]])
        ];
        downloadData(rows, 'treemap.csv');
    }

    render() {

        return (
            <React.Fragment>
                <select onChange={this.onChange} defaultValue={this.state.selectedYear}>
                    {
                        years.map(year => (
                            <option key={year} defaultValue={year}>
                                { year }
                            </option>
                        ))
                    }
                </select>
                <ResponsiveContainer width="100%" aspect={3}>
                    {/* TODO: add placeholder for client first load */}
                    <RechartsTreemap
                        data={this.state.data}
                        dataKey={this.state.dataKey}
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
