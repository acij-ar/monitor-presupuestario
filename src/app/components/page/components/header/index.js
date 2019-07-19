const React = require('react');
require('./index.scss');

const Header = () => (
    <div id="header">
        <div id="header-content">
            <a id="header-logo" href="/" />

            <input type="checkbox" id="header-menu-toggle" />
            <label htmlFor="header-menu-toggle" id="header-menu" /> {/* TODO: improve click-ability */}

            <ul id="header-menu-links">
                <li id="home">
                    <a href="/">
                        INICIO
                    </a>
                </li>
                <li id="monitor">
                    <a href="/monitor">
                        MONITOR
                    </a>
                </li>
                <li id="comparator">
                    <a href="/comparador">
                        COMPARADOR
                    </a>
                </li>
                <li id="about">
                    <a href="/acerca-de">
                        ACERCA DE
                    </a>
                </li>
                <li id="twitter">
                    <a href="https://twitter.com/ACIJargentina" target="_blank">
                        <img src="/static/twitter.svg" alt="twitter"/>
                    </a>
                </li>
                <li id="facebook">
                    <a href="https://www.facebook.com/ACIJ.ORG" target="_blank">
                        <img src="/static/facebook.svg" alt="facebook"/>
                    </a>
                </li>
                <li id="github">
                    <a href="https://github.com/acij-ar/monitor-presupuestario" target="_blank">
                        <img src="/static/github.svg" alt="github"/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
);

module.exports = Header;