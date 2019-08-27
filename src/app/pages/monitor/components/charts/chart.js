const React = require('react');
const axios = require('axios');
const ReactHighcharts = require('react-highcharts');
const ShareButtons = require('./share-buttons');
const _ = require('lodash');

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {props};
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
      .then(response => this.setState({config: response.data, showBadRequestMsg: false}))
      .catch(error => {
        if (error && error.response && error.response.status === 400) {
          this.setState({showBadRequestMsg: true});
        }
      });
  }

  render() {
    return this.state.showBadRequestMsg ?
      <div className="monitor-chart-bad-request">
        No se han encontrado datos para la combinación años y dependencias seleccionadas.
      </div> :
      this.state.config ?
        <React.Fragment>
          <ShareButtons/>
          <ReactHighcharts config={this.state.config}/>
        </React.Fragment> :
        null
  }
}

module.exports = Chart;

