const restclientGet = require('./restclient-get');
const Highcharts = require('./highcharts');

module.exports = (chart, params, url, elementId) => (
  restclientGet(url, {params})
    .then((data) => {
      if (chart) {
        chart.update(data);
      } else {
        chart = Highcharts.chart(elementId, data);
      }
    })
)
