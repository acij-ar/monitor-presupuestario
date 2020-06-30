const React = require('react');
const PropTypes = require('prop-types');
const axios = require('axios');

const { useEffect, useState } = React;

const EntityDetail = ({ params }) => {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    axios.get('/api/data/detail', { params })
      .then(({ data }) => setDetail(data));
  }, [params]);

  return (
    <div id="monitor-explorer-entity-detail">
      {
        detail.jurisdiction ?
          <React.Fragment>
            <div id="monitor-explorer-entity-detail-jurisdiction-name">
              {detail.jurisdiction.name}
            </div>
            <div id="monitor-explorer-entity-detail-jurisdiction-value">
              {detail.jurisdiction.percentage}% del presupuesto total
            </div>
          </React.Fragment> : null
      }

      {
        detail.entity ?
          <React.Fragment>
            <div id="monitor-explorer-entity-detail-entity-name">
              &gt; {detail.entity.name}
            </div>
            <div id="monitor-explorer-entity-detail-entity-value">
              {detail.entity.percentage}% del presupuesto <span className="previous-entity-first-letter">{detail.jurisdiction.name[0]}</span>
            </div>
          </React.Fragment> : null
      }

      {
        detail.program ?
          <React.Fragment>
            <div id="monitor-explorer-entity-detail-program-name">
              &gt; {detail.program.name}
            </div>
            <div id="monitor-explorer-entity-detail-program-value">
              {detail.program.percentage}% del presupuesto <span className="previous-entity-first-letter">{detail.entity.name[0]}</span>
            </div>
          </React.Fragment> : null
      }

      {
        detail.activity ?
          <React.Fragment>
            <div id="monitor-explorer-entity-detail-activity-name">
              &gt; {detail.activity.name}
            </div>
            <div id="monitor-explorer-entity-detail-activity-value">
              {detail.activity.percentage}% del presupuesto <span className="previous-entity-first-letter">{detail.program.name[0]}</span>
            </div>
          </React.Fragment> : null
      }

      {
        detail.total ?
          <React.Fragment>
            <div id="monitor-explorer-entity-detail-total-name">
              Presupuesto total
            </div>
            <div id="monitor-explorer-entity-detail-total-value">
              $ {detail.total.toLocaleString('es')}
            </div>
          </React.Fragment> : null
      }
    </div>
  );
};

EntityDetail.propTypes = {
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
}

module.exports = EntityDetail;
