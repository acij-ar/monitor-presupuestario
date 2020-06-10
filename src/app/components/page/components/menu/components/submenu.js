const React = require('react');
const PropTypes = require('prop-types');

const openAccordion = (id) => {
  const checkbox = document.querySelector(`#${id}_checkbox`);
  if (checkbox) {
    checkbox.checked = true;
  }
}

const SubMenu = ({pageSections}) => (
  <ul>
    {pageSections.map(({name, id, href}) => (
      <li key={id}>
        <a href={href || `#${id}`} onClick={() => openAccordion(id)}>
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
  })).isRequired
};

module.exports = SubMenu;
