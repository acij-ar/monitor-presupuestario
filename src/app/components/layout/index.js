const layout = ({ renderedComponent, scripts, styles, props }) => `
<!doctype html>
<html lang="es-ar">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
          content="Monitor presupuestario es una plataforma en la que encontrarás información de los diferentes organismos, ministerios, secretarías, programas y actividades presupuestarias desde el año 2007 hasta la actualidad y podrás monitorear la asignación y ejecución del presupuesto naciona">

    <title>Monitor presupuestario</title>
    
    <script>window.__INITIAL__DATA__ = ${JSON.stringify(props)}</script>
    
    <link rel="icon" type="image/x-icon" href="/static/favicon.ico">
    <link rel="stylesheet" href="/static/${styles[0]}"/>
    <link href="https://fonts.googleapis.com/css?family=Rubik:300,400&display=swap" rel="stylesheet">
</head>
<body>
    <div id="root">${renderedComponent}</div>
    <script src="/static/${scripts[0]}"></script>
</body>
</html>
`;

module.exports = layout;