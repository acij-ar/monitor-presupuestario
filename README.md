# [monitorpresupuestario.acij.org.ar](http://monitorpresupuestario.acij.org.ar/)

<!-- TODO: actualizar readme antes de cerrar el rediseño -->

## Estructura de carpetas

```
.
├── coverage                    # Carpeta auto generada al correr tests unitarios (no trackeada en git)
├── data                        # Datasets y db
├── devops                      # Scripts de bash y archivos de configuración para levantar
|                                 el proyecto en el servidor productivo
├── dist                        # Archivos generados por webpack
├── node_modules                # Dependencias
├── public                      # Archivos públicos estáticos
└── src                         # Archivos de desarrollo del proyecto
    ├── api                     # Routers y controllers de express para la API expuesta al mundo
    ├── app                     # Routers, controllers de express, componentes de react y estilos 
    |                             para las páginas del sitio
    ├── config                  # Archivos de configuración
    ├── services                # Scripts para rutinas y servicios del server
    └── utils                   # Helpers
```

## Estructura del proyecto

El proyecto consta de un servidor de [Express](https://expressjs.com/) que sirve un sitio armado usando
[React](https://reactjs.org/). Las distintas páginas del sitio se renderizan en el servidor y en el cliente se
hidratan sus componentes. Los archivos del clientes se transpilan usando [Webpack](https://webpack.js.org/)
y [Babel](https://babeljs.io/). Los archivos del servidor se transpilan on-the-fly por
[@babel/register](https://babeljs.io/docs/en/babel-register).

La base de datos está armada sobre [sqlite](https://www.sqlite.org/index.html) via el conector de node 
[better-sqlite3](https://www.npmjs.com/package/better-sqlite3). La db se arma utilizando datasets que son 
publicados por [Presupuesto Abierto](https://www.presupuestoabierto.gob.ar/sici/datos-abiertos#) (del Ministerio 
de Economia de Argentina). Estos archivos estan guardados - a modo de mirror - en una carpeta de google-drive. Los
archivos se descargan desde esta carpeta utilizando [googleapis](https://www.npmjs.com/package/googleapis).
Se utiliza [elasticlunr](https://www.npmjs.com/package/elasticlunr) para busquedas dentro del cliente.  

En el sitio web, los datos son graficados utilizando [Highcarts](https://www.highcharts.com/) via la dependencia 
[react-highcharts](https://www.npmjs.com/package/react-highcharts). 

Los tests unitarios están armados utilizando [jest](https://jestjs.io/) y [enzyme](https://enzymejs.github.io/enzyme/).
Se utiliza [estlint](https://eslint.org/) como linter de JS

## Configuraciones iniciales y setup de proyecto

### Setup

El proyecto está hecho utilizando node. Para utilizar la version de node correspondiente
al proyecto, se recomienda utilizar [nvm](https://github.com/nvm-sh/nvm). Una vez instalado
nvm, ejecutar `nvm use` en la carpeta raiz del proyecto para asegurarse de utilizar la
version de node correspondiente. 

Una vez instalado node, se deben instalar las dependencias del proyecto via npm. Ejecutar
`npm install` en la carpeta raiz del proyecto.

### Credenciales

Hay 2 archivos de configuración necesarios para el proyecto que no están trackeados por git:

- `src/services/google-drive-client/credentials.json`, utilizado para las APIs de google drive. El archivo debe ser
descargado desde [google console credentials](https://console.developers.google.com/apis/credentials). El archivo
descargado debe tener la misma estructura que el archivo `credentials-example.json` ubicado dentro de la misma carpeta.
Una vez descargado el archivo, es necesario ejecutar el comando `npm run google-drive-setup`. El comando mostrará
una url a la cual es necesario acceder con un navegador para otorgar permisos. La url de redirección será a 
`localhost:8080?code=OAUTH_CODE&other_params=...`. Copiar el valor del parametro `code` e introducirlo en la terminal.
- `src/services/authentication/credentials.json`, utilizado para la página admin del sitio. En este caso, basta con
copiar el archivo `credentials-example.json` ubicado en la misma carpeta y rellenado los valores correspondientes 
dentro del archivo.

## Ambiente dev

Una vez instaladas las dependencias y configuradas las credenciales, el ambiente de desarrollo puede levantarse
mediante los siguientes pasos:  

- Todos los archivos .js y .css para los navegadores pueden ser generados via `npm run build` o `npm run watch`. Este
ultimo comando queda ejecutandose y escuchando cambios a los archivos para volver a buildear ante cualquier cambio.
- El servidor de desarrollo puede levantarse con el comando `npm run start-dev`. Esto levanta un servidor en el puerto 8080. 

## Ambiente prod

Diferencias del ambiente productivo respecto al ambiente de desarrollo:

- Los archivos de webpack son buildeados y minificación usando el comando `npm run dist`.
- El servidor se levanta usando [pm2](https://pm2.keymetrics.io/) para asegurar que siempre esté levantado. Una copia 
del archivo de configuración de pm2 está en `devops/ecosystem.config.js`
- Delante del servidor de node hay un nginx que rutea entre el ambiente productivo y el ambiente de test. una copia 
del archivo de configuración de nginx está en `devops/nginx.conf`

## Datasets y admin

Una vez levantado el sitio, entrar con el navegador a `/admin` y loguearse usando la contraseña configurada en 
`src/services/authentication/credentials.json`. Esta página sirve para actualizar los datasets descargados en el 
sitio y para actualizar los textos que se muestran en las distintas secciónes. Al momento de disparar una
actualización de los datasets desde el admin, se ejecutan los pasos 2 a 4 de la siguiente sección _"Ciclo de vida de los datos"_. 

### Datasets

El servidor maneja 3 tipos distintos de datasets:
- **Datasets de gasto anual**: Son archivos .csv publicados por la página oficial del Ministerio de Economia de Argentina.
Reflejan la estructura jerarquica de los distintos organismos del estado y posee información de las partidas 
presupuestarias asignadas a cada organismo segun distintos criterios. 
- **Datasets de proyecto de ley**: son archivos .csv anuales que solo contienen las diferencias del presupuesto respecto al
proyecto de ley para cada año. La elaboración es de ACIJ. La estructura de estos datasets copian la estructura de los
datasets publicados por el Ministerio, para que luego sea posible integrar ambos.  
- **Dataset de inflación**: es un único archivo .csv generado por ACIJ. Refleja la inflación anual de la Argentina

### Ciclo de vida de los datos

El ciclo de vida de los archivos consta de las siguientes partes:

1. **De Presupuesto Abierto a Google Drive**. Los datasets son publicados por
[Presupuesto Abierto](https://www.presupuestoabierto.gob.ar/sici/datos-abiertos#), página oficial del
Ministerio de Economia de Argentina. Estos dataset deben ser descargados manualmente para luego ser subidos a drive.
Como unica excepción, el archivo de inflación anual es generado por ACIJ y subido a la misma carpeta de drive.
Los ids de estos archivos estan en `src/config/files.js`.
2. **De Drive a archivos .csv locales**. El servicio ubicado en `src/services/dataset-updater/update-files.js` se
encarga de comparar los archivos locales contra los archivos de google-drive y descargar los archivos que estén
desactualizados. Los datasets descargados son ubicados en `data/raw`.
3. **De .csv a .json**. Los archivos descargados de drive son convertidos de formato .csv a formato .json para
reflejar mejor la estructura jerarquica del estado argentino. El servicio encargado de esta conversión está ubicado
en `src/services/csv-to-json`. Luego de este proceso, el servicio `src/services/update-original-budget` actualiza
la información del proyecto de ley de presupuesto para los años donde esté disponible. Los archivos .json generados
son guardados en `data/json`
4. **De .json a sqlite**. Los archivos .json son guardados en una base de datos de sqlite. El servicio encargado de 
esta conversión se encuentra en `src/services/db-updater/`. La db se guarda en `data/db.sqlite3` 

### Tests y lint

Los tests del proyecto pueden ser ejecutados via `npm run test`. Este comando corre tanto los tests unitarios como el
linter del proyecto. Para ejecutar solo los tests unitaros ejecutar `npm run test:jest` y para ejecutar solo el linter
`npm run test:lint` 
