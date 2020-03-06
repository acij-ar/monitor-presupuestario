const React = require('react');

const Footer = () => (
  <div id="footer">
    <div id="footer-content">
      <a href="/">
        <img id="footer-logo" src="/static/logo.png" alt="Monitor presupuestario" />
      </a>
      <a href="http://acij.org.ar/" target="_blank" rel="noopener noreferrer">
        <img id="footer-acij" src="/static/logo-acij.png" alt="ACIJ" />
      </a>
      <div id="footer-information">
        <a href="mailto:info@acij.org.ar">info@acij.org.ar</a>
        <div>Tel (+54 11) 4381-2371</div>
        <div>Av. de Mayo 1161, 1 piso</div>
        <div>(C1085ABB) Bs As, Argentina</div>
        <a href="http://acij.org.ar/">acij.org.ar</a>
      </div>
    </div>
  </div>
);

module.exports = Footer;