// TODO: Maybe it could be useful to add a column with links to each file at google drive
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
    {datasets.map(({filename, upToDate, lastModified }) => (
      <tr key={filename}>
        <td>{filename}</td>
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
  })).isRequired,
};

module.exports = DatasetTable;
