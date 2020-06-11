const React = require('react');
const Chart = require('../../../../components/chart');
const ReactHighcharts = require('react-highcharts');

class Sunburst extends Chart {
  constructor(props) {
    super(props);
    this.dataUrl = '/api/data/test.json';
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
