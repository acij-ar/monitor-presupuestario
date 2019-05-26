const layout = ({ renderedComponent, clientName, props }) => `
<!doctype html>
<html lang="es-ar">
<head>
    <title>Monitor presupuestario</title>
    <script>window.__INITIAL__DATA__ = ${JSON.stringify(props)}</script>
    <link rel="icon" type="image/x-icon" href="/static/favicon.ico">
    <link rel="stylesheet" href="./static/${clientName}.css"/>
</head>
<body>
    <div id="root">${renderedComponent}</div>
    <script src="/static/${clientName}.js"></script>
</body>
</html>
`;

module.exports = layout;