const React = require('react');
const PropTypes = require('prop-types');

const Layout = ({ children, scripts, styles, componentProps }) => (
  <html lang="es-ar">
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Monitor presupuestario es una plataforma en la que encontrarás información de los diferentes organismos, ministerios, secretarías, programas y actividades presupuestarias desde el año 2007 hasta la actualidad y podrás monitorear la asignación y ejecución del presupuesto naciona" />
    <title>Monitor presupuestario</title>
    <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />

    { styles.map(href => <link key={href} rel="stylesheet" href={`/static/${href}`} />) }
    <link href="https://fonts.googleapis.com/css?family=Rubik:400,500,700,900&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root">{ children }</div>
    <script dangerouslySetInnerHTML={{ __html: `window.__INITIAL__DATA__=${JSON.stringify(componentProps)};` }} />
    { scripts.map(src => <script key={src} src={`/static/${src}`} />) }
  </body>
  </html>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  scripts: PropTypes.arrayOf(PropTypes.string),
  styles: PropTypes.arrayOf(PropTypes.string),
  componentProps: PropTypes.object,
};

Layout.defaultProps = {
  scripts: [],
  styles: [],
  componentProps: null,
};

module.exports = Layout;
