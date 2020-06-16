const React = require('react');

const EntityDetail = () => (
  <div id="monitor-explorer-entity-detail">
    <div id="monitor-explorer-entity-detail-jurisdiction-name">
      Nombre jurisdicción
    </div>
    <div id="monitor-explorer-entity-detail-jurisdiction-value">
      % del presupuesto total
    </div>

    <div id="monitor-explorer-entity-detail-entity-name">
      &gt; Nombre entidad
    </div>
    <div id="monitor-explorer-entity-detail-entity-value">
      % del presupuesto total <span>J</span>
    </div>

    <div id="monitor-explorer-entity-detail-program-name">
      &gt; Nombre programa
    </div>
    <div id="monitor-explorer-entity-detail-program-value">
      % del presupuesto total <span>E</span>
    </div>

    <div id="monitor-explorer-entity-detail-activity-name">
      &gt; Nombre actividad
    </div>
    <div id="monitor-explorer-entity-detail-activity-value">
      % del presupuesto total <span>P</span>
    </div>
  </div>
);

module.exports = EntityDetail;
