const React = require('react');
const PropTypes = require('prop-types');
const getFromDB = require('../helpers/get-from-db');
const AdminEntryEditor = require('../list-entry');

const { useEffect, useState } = React;

const AdminList = ({ type, title }) => {
  const [savedEntries, setEntries] = useState([]);

  useEffect(() => {
    const loadFromDB = async () => {
      const entries = await getFromDB(type);
      setEntries(entries);
    };
    loadFromDB();
  }, []);

  const onUpdate = (updatedEntries) => {
    setEntries(updatedEntries);
  };

  return (
    <div className="admin-list">
      <h2>{ title }</h2>
      { savedEntries.map(entry => (<AdminEntryEditor key={entry.id} type={type} onUpdate={onUpdate} entry={entry} />)) }
      <AdminEntryEditor type={type} onUpdate={onUpdate} />
    </div>
  )
};

AdminList.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

module.exports = AdminList;
