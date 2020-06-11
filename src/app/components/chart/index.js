const React = require('react');
const axios = require('axios');

class Sunburst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.downloadChartData();
  }

  downloadChartData() {
    if (this.dataUrl) {
      axios.get(this.dataUrl)
        .then(({ data }) => this.setState({ data }));
    }
  }
}

module.exports = Sunburst;
