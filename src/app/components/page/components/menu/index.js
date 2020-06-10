const React = require('react');
const PropTypes = require('prop-types');
const SubMenu = require('./components/submenu');

const submenus = {
  budget: [
    { name: '¿Qué es?', id: 'what-is-the-budget' },
    { name: 'El ciclo del presupuesto', id: 'budget-cycle' },
    { name: 'Clasificaciones', id: 'budget-classifications' },
    { name: '¿En qué se gasta?', id: 'budget-spent' },
    { name: '¿Para qué se gasta?', id: 'budget-what-for' },
    { name: '¿Quién gasta?', id: 'budget-who' },
    { name: 'Ajuste de inflación', id: 'budget-inflation' },
    { name: 'Análisis presupuestario', id: 'budget-analysis' },
  ],
  monitor: [
    { name: 'Explorar', id: 'explore-menu-link', href: '/monitor/explorar' },
    { name: 'Comparar', id: 'compare-menu-link', href: '/monitor/comparar' },
  ],
  about: [
    { name: 'El Monitor Presupuestario', id: 'about-main-content' },
    { name: 'ACIJ', id: 'about-acij' },
    { name: 'Matchbox', id: 'about-matchbox' },
    { name: 'Metodología', id: 'about-methodology' },
  ]
}

const Menu = ({ selectedPage }) => (
  <div id="menu">
    <div id="menu-content">
      <a href="/">
        <img id="logo" src="/static/logo.svg" alt="Monitor Presupuestario" title="Monitor Presupuestario" />
      </a>

      <ul id="menu-sections">
        <li>
          <a href="/el-presupuesto" id="menu-link-budget" className={selectedPage === 'budget' ? 'active' : ''}>
            El presupuesto
          </a>
          <SubMenu pageSections={submenus.budget} />
        </li>
        <li>
          <a href="/monitor" id="menu-link-monitor" className={['compare', 'explore'].includes(selectedPage) ? 'active' : ''}>
            Monitor
          </a>
          <SubMenu pageSections={submenus.monitor} />
        </li>
        <li>
          <a href="/acerca-de" id="menu-link-about" className={selectedPage === 'about' ? 'active' : ''}>
            Acerca de
          </a>
          <SubMenu pageSections={submenus.about} />
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
