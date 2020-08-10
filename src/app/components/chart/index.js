
module.exports = (chart, params, url, elementId) => (
  restclientGet(url, {params})
    .then((data) => {

      return {chart, data}
    })
)
