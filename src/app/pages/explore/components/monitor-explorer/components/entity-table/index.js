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
              <th>Categoria</th>
              <th>C. Original</th>
              <th>C. Vigente</th>
              <th>C. Devengado</th>
            </tr>
          </thead>
          <tbody>
          {
            table.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>$ {row.original.toLocaleString('es')}</td>
                <td>$ {row.vigente.toLocaleString('es')}</td>
                <td>$ {row.devengado.toLocaleString('es')}</td>
              </tr>
            ))
          }
          </tbody>
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
