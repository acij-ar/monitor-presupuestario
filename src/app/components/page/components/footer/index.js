const React = require('react');

const Footer = () => (
  <footer>
    <div id="footer-content">
      <a href="http://acij.org.ar/" target="_blank" rel="noopener noreferrer" id="acij-link">
        <img src="/static/logo-blanco.svg" alt="ACIJ"/>
      </a>
      <a href="https://github.com/acij-ar/monitor-presupuestario" target="_blank" rel="noopener noreferrer" className="social-link">
        <img src="/static/github.svg" alt="github"/>
      </a>
    </div>
  </footer>
);

module.exports = Footer;
