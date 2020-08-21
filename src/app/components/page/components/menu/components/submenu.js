const React = require('react');
const PropTypes = require('prop-types');

const openAccordion = (id) => {
  const checkbox = document.querySelector(`#${id}_checkbox`);
  if (checkbox) {
    checkbox.checked = true;
  }
}

const SubMenu = ({pageSections, selectedSubSection}) => (
  <ul>
    {pageSections.map(({name, id, href}) => (
      <li key={id}>
        <a href={href || `#${id}`} onClick={() => openAccordion(id)} className={selectedSubSection === id ? 'active' : ''}>
          {name}
        </a>
      </li>
    ))}
  </ul>
);

SubMenu.propTypes = {
  pageSections: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  selectedSubSection: PropTypes.string,
};

module.exports = SubMenu;
