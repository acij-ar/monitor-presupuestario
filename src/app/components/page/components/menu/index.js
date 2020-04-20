const React = require('react');
const PropTypes = require('prop-types');

const Menu = ({ selectedPage }) => (
  <div id="menu">
    <div id="menu-content">
      <a id="logo" href="/" />

      <ul id="menu-sections">
        <li>
          <a href="/el-presupuesto" id="menu-link-budget" className={selectedPage === 'budget' ? 'active' : ''}>
            El presupuesto
          </a>
        </li>
        <li>
          <a href="/monitor" id="menu-link-monitor" className={selectedPage === 'monitor' ? 'active' : ''}>
            Monitor
          </a>
        </li>
        <li>
          <a href="/acerca-de" id="menu-link-about" className={selectedPage === 'about' ? 'active' : ''}>
            Acerca de
          </a>
        </li>
        <li>
          <a href="/dudas" id="menu-link-doubts" className={selectedPage === 'doubts' ? 'active' : ''}>
            Dudas
          </a>
        </li>
      </ul>
    </div>
  </div>
);

Menu.propTypes = {
  selectedPage: PropTypes.string.isRequired,
}

module.exports = Menu;