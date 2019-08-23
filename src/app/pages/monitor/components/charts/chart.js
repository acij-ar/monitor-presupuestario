const React = require('react');
const axios = require('axios');
const ReactHighcharts = require('react-highcharts');

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.downloadChartData();
  }

  componentDidUpdate() {
    if (this.props !== this.state.props) {
      this.state.props = this.props;
      this.setState(this.state);
      this.downloadChartData();
    }
  }

  downloadChartData() {
    const {data} = this.props;
    axios.post(this.props.endpoint, data)
      .then(response => this.setState({config: response.data}));
  }

  render() {
    return this.state.config ? <ReactHighcharts config={this.state.config}/> : null
  }
}

module.exports = Chart;

