const layout = (renderedComponente, clientScript, props) => `
<!doctype html>
<html lang="es-ar">
<head>
    <title>Monitor presupuestario</title>
    <script>window.__INITIAL__DATA__ = ${JSON.stringify(props)}</script>
    <link rel="icon" type="image/x-icon" href="/static/favicon.ico">
</head>
<body>
    <div id="root">${renderedComponente}</div>
    <script src="/static/${clientScript}"></script>
</body>
</html>
`;

module.exports = layout;