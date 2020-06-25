const React = require('react');
const PropTypes = require('prop-types');
const axios = require('axios');

const { useEffect, useState } = React;


const EntityTable = ({ params }) => {
  const [table, setTable] = useState({});

  useEffect(() => {
    if (params && params.year) {
      axios.get('/api/data/table', { params })
        .then(({ data }) => setTable(data));
    }
  }, [params]);

  return (
    <div id="monitor-explorer-entity-table">
      {
        table && table.length > 0 ? <table>
          <thead>
            <tr>
              <th><span>Categoria</span></th>
              <th><span>C. Original</span></th>
              <th><span>C. Vigente</span></th>
              <th><span>C. Devengado</span></th>
            </tr>
          </thead>
          <tbody>
          {
            table.map((row, index) => (
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
  );
};

EntityTable.propTypes = {
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

module.exports = EntityTable;
