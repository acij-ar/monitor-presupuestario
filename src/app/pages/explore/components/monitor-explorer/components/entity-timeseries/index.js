const React = require('react');
const PropTypes = require('prop-types');
const ReactHighcharts = require('react-highcharts');
const axios = require('axios');

const { useEffect, useState } = React;

const EntityTimeseries = ({ params }) => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    axios.get('/api/data/timeseries', { params })
      .then(({ data }) => setConfig(data));
  }, [params]);

  return (
    <div id="timeseries-chart">
      { config ? <ReactHighcharts config={config}/> : null }
    </div>
  )
}

EntityTimeseries.propTypes = {
  params: PropTypes.shape({
    jurisdiction: PropTypes.string,
    entity: PropTypes.string,
    program: PropTypes.string,
    activity: PropTypes.string,
    year: PropTypes.number,
    function: PropTypes.string,
    budget: PropTypes.string,
    inflation: PropTypes.string,
  }),
};

module.exports = EntityTimeseries;
