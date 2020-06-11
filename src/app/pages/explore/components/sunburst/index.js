const React = require('react');
const axios = require('axios');
const ReactHighcharts = require('react-highcharts');

class Sunburst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.downloadChartData();
  }

  downloadChartData() {
    axios.get('/api/data/test.json')
      .then(({ data }) => this.setState({ data }));
  }

  render() {
    return (
      <div id="sunburst-chart">
        { this.state.data ? <ReactHighcharts config={this.state.data}/> : null }
      </div>
    )
  }
}

module.exports = Sunburst;
