const React = require('react');
const { Treemap: RechartsTreemap, ResponsiveContainer } = require('recharts');
const _ = require('lodash');
const years = require('../../../helpers/available-years');
const downloadChart = require('../../../helpers/download-chart');

class Treemap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedYear: years[years.length - 1],
            dataKey: 'credito_presupuestado',
            data: this.props.data,
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ selectedYear: e.target.value });
    }

    static downloadImage() {
        downloadChart('.monitor-treemap svg')
    }

    render() {
        const dataForYear = this.state.data[this.state.selectedYear];
        const sortedData = _.sortBy(dataForYear, dataPoint => -dataPoint[this.state.dataKey]);
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
                        data={sortedData}
                        dataKey={this.state.dataKey}
                        ratio={4 / 3}
                        stroke="#fff"
                        fill="#8884d8"
                        isAnimationActive={false}
                    />
                </ResponsiveContainer>
                <div className="monitor-treemap-download">
                    <span onClick={Treemap.downloadImage}>Descargar gráfico</span>
                </div>
            </React.Fragment>
        )
    }
}

module.exports = Treemap;
