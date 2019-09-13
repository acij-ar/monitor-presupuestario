const React = require('react');
const axios = require('axios');
const ReactHighcharts = require('react-highcharts');
const ShareButtons = require('./share-buttons');
const _ = require('lodash');
const highchartsBaseConfig = require('./highcharts-base-config');

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {props};
  }

  componentDidMount() {
    this.downloadChartData();
  }

  componentDidUpdate() {
    const newDataSnapshot = JSON.stringify(this.props.data);
    if (this.dataSnapshot !== newDataSnapshot) {
      this.state.props = this.props;
      this.setState(this.state);
      this.downloadChartData();
    }
  }

  downloadChartData() {
    const {data} = this.props;
    this.dataSnapshot = JSON.stringify(data);
    axios.post(this.props.endpoint, data)
      .then(response => {
        const config = _.merge(response.data, highchartsBaseConfig);
        this.setState({config, showBadRequestMsg: false});
      })
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

