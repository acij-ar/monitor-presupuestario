# [monitorpresupuestario.acij.org.ar](http://monitorpresupuestario.acij.org.ar/)

## Setup

### Ambiente y dependencias

El proyecto está hecho utilizando node. Para utilizar la version de node correspondiente
al proyecto, se recomienda utilizar [nvm](https://github.com/nvm-sh/nvm). Una vez instalado
nvm, ejecutar `nvm use` en la carpeta raiz del proyecto para asegurarse de utilizar la
version de node correspondiente. 

Una vez instalado node, se deben instalar las dependencias del proyecto via npm. Ejecutar
`npm install` en la carpeta raiz del proyecto.

### Datos y configuración

Los datos del sitio son obtenidos desde google drive. Para el correcto funcionamiento de este flujo es necesario
configurar las credenciales para la api de google.
- Entrar a [google console credentials](https://console.developers.google.com/apis/credentials) y descargar las 
credenciales de la app a usar. Copiar el contenido de este json en `src/db/data/google-drive-client/credentials.json`.
- Ejecutar el comando `npm run google-drive` y seguir las instrucciones de la consola para obtener el token para 
conectarse a google drive. Este token se guarda en `src/db/data/google-drive-client/token.json`
- Ejecutar el comando `npm run download-datasets` para descargar una copia de todos los datasets utilizados para crear
la DB del sitio. Estos archivos quedarán guardados en `src/db/data/datasets`. 

## Desarrollo

npm run build
npm run watch
npm run start-dev

### Tests y lint

npm run test
npm run lint
npm run test:jest

### TODOs

- Proptypes en todos los componentes (+ forzar errores por proptypes?)
- E2E tests

## Producción

npm run dist
pm2 config
