const React = require('react');
const PropTypes = require('prop-types');
const ReactHighcharts = require('react-highcharts');
const axios = require('axios');

const { useEffect, useState } = React;

const EntitySunburst = ({ params }) => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    axios.get('/api/data/test.json', { params })
      .then(({ data }) => setConfig(data));
  }, [params]);

  return (
    <div id="sunburst-chart">
      { config ? <ReactHighcharts config={config}/> : null }
    </div>
  )
}

EntitySunburst.propTypes = {
  params: PropTypes.shape({
    jurisdiction: PropTypes.string,
    entity: PropTypes.string,
    program: PropTypes.string,
    activity: PropTypes.string,
    year: PropTypes.string,
    function: PropTypes.string,
    budget: PropTypes.string,
    inflation: PropTypes.string,
  }),
};


module.exports = EntitySunburst;
