const React = require('react');
const PropTypes = require('prop-types');
const DataClient = require('../../../../../../helpers/data-client');
const LoadingOverlay = require('../../../../../../components/loading-overlay');

const { useEffect, useState } = React;
const dataClient = new DataClient({ url: '/api/data/detail' });

const EntityDetail = ({ params }) => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);

  const dataCallback = (data) => {
    setDetail(data);
    setLoading(false);
  }

  useEffect(() => {
    if (params && params.year) {
      setLoading(true);
      dataClient.get(params, dataCallback)
    } else {
      dataClient.cancelRequest();
    }
  }, [params]);

  return (
    <LoadingOverlay loading={loading}>
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
                {detail.entity.percentage}% del presupuesto
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
                {detail.program.percentage}% del presupuesto
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
                {detail.activity.percentage}% del presupuesto
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
    </LoadingOverlay>
  );
};

EntityDetail.propTypes = {
  params: PropTypes.shape({
    jurisdiction: PropTypes.string,
    entity: PropTypes.string,
    program: PropTypes.string,
    activity: PropTypes.string,
    year: PropTypes.number,
    budget: PropTypes.string,
    inflation: PropTypes.string,
  }),
}

module.exports = EntityDetail;
