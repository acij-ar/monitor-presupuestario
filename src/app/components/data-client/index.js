const axios = require('axios');

const CancelToken = axios.CancelToken;

class DataClient {
  constructor(url) {
    this.url = url;
    this.activeRequest = null
  }

  async get(params, callback) {
    if (this.activeRequest) {
      this.activeRequest.cancel()
    }

    this.activeRequest = CancelToken.source();
    const cancelToken = this.activeRequest.token;
    try {
      const { data } = await axios.get(this.url, { params, cancelToken });
      this.activeRequest = null;
      callback(data)
    } catch (err) {
      if (!axios.isCancel(err)) {
        console.log(err);
      }
    }
  }
}

module.exports = DataClient;
