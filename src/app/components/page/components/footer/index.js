const React = require('react');

const Footer = () => (
  <div id="footer">
    <div id="footer-content">
      <span id="acij-initiative">UNA INICIATIVA DE</span>
      <a href="http://acij.org.ar/" target="_blank" rel="noopener noreferrer" id="acij-link">
        <img src="/static/logo-acij.png" alt="ACIJ"/>
      </a>
      <a href="https://twitter.com/ACIJargentina" target="_blank" rel="noopener noreferrer" className="social-link">
        <img src="/static/twitter.svg" alt="twitter"/>
      </a>
      <a href="https://www.facebook.com/ACIJ.ORG" target="_blank" rel="noopener noreferrer" className="social-link">
        <img src="/static/facebook.svg" alt="facebook"/>
      </a>
      <a href="https://github.com/acij-ar/monitor-presupuestario" target="_blank" rel="noopener noreferrer" className="social-link">
        <img src="/static/github.svg" alt="github"/>
      </a>
    </div>
  </div>
);

module.exports = Footer;