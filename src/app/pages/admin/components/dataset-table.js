const React = require('react');
const PropTypes = require('prop-types');

const DatasetTable = ({datasets}) => (
  <table>
    <thead>
    <tr>
      <th>Dataset</th>
      <th>Número de filas</th>
      <th>Última actualización</th>
      <th>Al dia con google drive</th>
      <th/>
    </tr>
    </thead>
    <tbody>
    {datasets.map(({filename, upToDate, lastModified, lines }) => (
      <tr key={filename}>
        <td>{filename}</td>
        <td>{lines || '-'}</td>
        <td>{lastModified || '-'}</td>
        <td>{upToDate ? '✅' : '❌'}</td>
      </tr>
    ))}
    </tbody>
  </table>
);

DatasetTable.propTypes = {
  datasets: PropTypes.arrayOf(PropTypes.shape({
    filename: PropTypes.string.isRequired,
    upToDate: PropTypes.bool.isRequired,
    lastModified: PropTypes.string,
    lines: PropTypes.number,
  })).isRequired,
};

module.exports = DatasetTable;
