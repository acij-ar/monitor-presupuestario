const React = require('react');
const PropTypes = require('prop-types');
const getFromDB = require('./helpers/get-from-db');

const { useEffect, useState } = React;

const AdminList = ({ type, title }) => {
  const [savedEntries, setEntries] = useState([]);

  useEffect(async () => {
    const entries = await getFromDB(type);
    setEntries(entries);
  }, [])

  return (
    <div className="admin-list">
      <h2>{ title }</h2>
      { savedEntries.map(entry => (
        <div key={entry.id}>
          {entry.name}
        </div>
      )) }
    </div>
  )
};

AdminList.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

module.exports = AdminList;
