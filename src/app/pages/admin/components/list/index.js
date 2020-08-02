const React = require('react');
const PropTypes = require('prop-types');
const AdminEntryEditor = require('../list-entry');
const axios = require('axios');

const { useEffect, useState } = React;

const AdminList = ({ type, title }) => {
  const [savedEntries, setEntries] = useState([]);

  useEffect(() => {
    const loadFromDB = async () => {
      const { data: entries } = await axios.get(`/api/admin/${type}`);
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
