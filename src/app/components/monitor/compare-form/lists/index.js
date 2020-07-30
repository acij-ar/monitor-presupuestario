const React = require('react');
const PropTypes = require('prop-types');
const List = require('./list');

const Lists = ({ options, selected }) => {
  const lists = [
    { name: 'Jurisdicciones', id: 'jurisdictions' },
    { name: 'Entidades', id: 'entities' },
    { name: 'Programas', id: 'programs' },
    { name: 'Actividades', id: 'activities' },
  ]
  return (
    <div id="compare-form-lists">
      { lists.map(list => (
        <List
          key={list.id}
          {...list}
          items={options && options.entities && options.entities[list.id]}
        />
      )) }
    </div>
  );
}

Lists.propTypes = {
  options: PropTypes.object.isRequired,
  selected: PropTypes.object.isRequired,
}

module.exports = Lists;
