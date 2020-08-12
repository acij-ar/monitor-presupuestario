const axios = require('axios');
const Highcharts = require('./highcharts');
const querystring = require('qs')

const CancelToken = axios.CancelToken;

class DataClient {
  constructor({ url, highchartsSelector, destroyChartBeforeUpdate }) {
    this.url = url;
    this.highchartsSelector = highchartsSelector;
    this.highchartsChart = null;
    this.activeRequest = null
    this.destroyChartBeforeUpdate = destroyChartBeforeUpdate;
  }

  async get(params, callback) {
    if (this.activeRequest) {
      this.activeRequest.cancel()
    }

    this.activeRequest = CancelToken.source();
    const cancelToken = this.activeRequest.token;

    try {
      const url = `${this.url}?${querystring.stringify(params)}`;
      const { data } = await axios.get(url, { cancelToken });
      this.activeRequest = null;
      if (this.highchartsSelector) this.createOrUpdateChart(data);
      callback(data)
    } catch (err) {
      this.handleError(err);
    }
  }

  handleError(err) {
    if (!axios.isCancel(err)) {
      console.error(err);
    }
  }

  createOrUpdateChart(data) {
    if (this.highchartsChart && this.destroyChartBeforeUpdate) {
      this.destroyChart();
    }

    if (this.highchartsChart) {
      this.highchartsChart.update(data);
    } else {
      this.highchartsChart = Highcharts.chart(this.highchartsSelector, data);
    }
  }

  destroyChart() {
    if (this.highchartsChart) {
      this.highchartsChart.destroy();
      this.highchartsChart = null;
    }
  }
}

module.exports = DataClient;
