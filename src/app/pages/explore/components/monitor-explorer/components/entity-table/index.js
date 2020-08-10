const React = require('react');
const PropTypes = require('prop-types');
const DataClient = require('../../../../../../components/data-client');
const ChartActions = require('../../../../../../components/monitor/chart-actions');
const generateDataForSheet = require('./generate-data-for-sheet');

const { useEffect, useState } = React;
const dataClient = new DataClient('/api/data/table');

const EntityTable = ({ params }) => {
  const [table, setTable] = useState({});
  const [actionVisible, setVisible] = useState(false);

  const dataCallback = (data) => {
    setTable(data);
    setVisible(true)
  };

  useEffect(() => {
    if (params && params.year) {
      dataClient.get(params, dataCallback);
    }
  }, [params]);

  return (
    <ChartActions visible={actionVisible} generateDataForSheet={() => generateDataForSheet(table, params)} imageTypesEnabled={false}>
      <div id="monitor-explorer-entity-table">
        {
          table && table.rows && table.rows.length > 0 ? <table>
            <thead>
              <tr>
                <th><span>{table.header.name}</span></th>
                <th><span>C. Original</span></th>
                <th><span>C. Vigente</span></th>
                <th><span>C. Devengado</span></th>
              </tr>
            </thead>
            <tbody>
            {
              table.rows.map((row, index) => (
                <tr key={index}>
                  <td><span>{row.name}</span></td>
                  <td><span>$ {row.original.toLocaleString('es')}</span></td>
                  <td><span>$ {row.vigente.toLocaleString('es')}</span></td>
                  <td><span>$ {row.devengado.toLocaleString('es')}</span></td>
                </tr>
              ))
            }
            </tbody>
            <tfoot>
              <tr>
                <th><span/></th>
                <th><span/></th>
                <th><span/></th>
                <th><span/></th>
              </tr>
            </tfoot>
          </table> : null
        }
      </div>
    </ChartActions>
  );
};

EntityTable.propTypes = {
  params: PropTypes.shape({
    jurisdiction: PropTypes.string,
    entity: PropTypes.string,
    program: PropTypes.string,
    activity: PropTypes.string,
    year: PropTypes.number,
    budget: PropTypes.string,
    inflation: PropTypes.string,
  }),
};

module.exports = EntityTable;
