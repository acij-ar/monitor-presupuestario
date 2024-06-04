# [monitorpresupuestario.acij.org.ar](http://monitorpresupuestario.acij.org.ar/)

## Estructura del proyecto

El proyecto consta de un servidor de [Express](https://expressjs.com/) que sirve un sitio armado usando
[React](https://reactjs.org/). Las distintas páginas del sitio se renderizan en el servidor y en el cliente se
hidratan sus componentes. Los archivos del clientes se transpilan usando [Webpack](https://webpack.js.org/)
y [Babel](https://babeljs.io/). Los archivos del servidor se transpilan on-the-fly por
[@babel/register](https://babeljs.io/docs/en/babel-register).

La base de datos está armada sobre mysql. La db parte de datasets que son 
publicados por [Presupuesto Abierto](https://www.presupuestoabierto.gob.ar/sici/datos-abiertos#) (del Ministerio 
de Economia de Argentina)
En el sitio web, los datos son graficados utilizando [Highcarts](https://www.highcharts.com/) via la dependencia 
[react-highcharts](https://www.npmjs.com/package/react-highcharts). 

Tambien contiene un contenedor donde se realizan las tareas de devops y actualizaciond de datos, con el objetivo de separar tareas de carga pesada del contenedor de produccion.

Los tests unitarios están armados utilizando [jest](https://jestjs.io/) y [enzyme](https://enzymejs.github.io/enzyme/).
Se utiliza [estlint](https://eslint.org/) como linter de JS

Se utilizan 3 contenedores para la base, el servidor, y los procesos devops, estan especificados en el archivo `docker_compose.yml`


## Configuraciones iniciales y setup de proyecto
    
### Requerimientos

    - Linux
    - Python3
    - Node
    - Mysql
    - Docker


### Setup

El proyecto está hecho utilizando node. Para utilizar la version de node correspondiente
al proyecto, se recomienda utilizar [nvm](https://github.com/nvm-sh/nvm). Una vez instalado
nvm, ejecutar `nvm use` en la carpeta raiz del proyecto para asegurarse de utilizar la
version de node correspondiente. 

Una vez instalado node, se deben instalar las dependencias del proyecto via npm. Ejecutar
`npm install` en la carpeta raiz del proyecto.

Tambien utiliza python para realizar los updates de la base de datos.

### Credenciales

Hay 2 archivos de configuración necesarios para el proyecto que no están trackeados por git:

- `.env`, utilizado para las variables de entorno de los contenedores 
- `src/config/mysql.js`, utilizado para la conexión a la db de mysql
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

- Buildear los contenedores `docker compose -f docker_compose.yml up`
- Mediante el comando `docker compose -f docker_compose.yml up` se levantan los contendores de la base y el servidor el cual realiza los siguientes procesos de manera automatica.

- El archivo `startup.sh` automatiza los siguientes pasos:
    - Los archivos de webpack son buildeados y minificación usando el comando `npm run dist`.
    - El servidor se levanta usando [pm2](https://pm2.keymetrics.io/) para asegurar que siempre esté levantado. Una copia 
    del archivo de configuración de pm2 está en `monitor/devops/ecosystem.config.js`

- Por fuera de los contenedores hay un nginx que rutea entre el ambiente productivo y el ambiente de test. una copia 
del archivo de configuración de nginx está en `monitor/devops/nginx.conf`

## Datasets y admin

Una vez levantado el sitio, entrar con el navegador a `/admin` y loguearse usando la contraseña configurada en 
`src/services/authentication/credentials.json`. Esta página sirve para modificar el FAQ y el Glosario

Los datos de la base se actualizan mediante el script ubicado en `devops/dataset_update.py`. Este debe ser configurado mediante cron u otra herramienta de automatizacion para correr cada un tiempo determinado.

La estructura de las tablas se eneucntra en `devops/table_structure.sql`

El script primero limpia los datos del respectivo anio, luego descarga de 'https://www.presupuestoabierto.gob.ar/datasets/<Anio>/credito-anual-<Anio>.zip' e inserta cada elemento en la tabla presupuesto.

Una vez todo el dataset fue procesado e insertado en la base y convertido en valores enteros, se prodece a popular las tablas de manera jerarquica (desde actividades a ejercicios) con tal de que los totales respectivos se correspondan. Despues se realiza el ajuste inflacionario correspondiente a ese anio.

Para esto es de vital importancia cargar las procedures en la base de datos estas estan en el archivo `devops/database_structure.sql` en el cual tambien esta la query para crear la base con sus tablas.

Se corre mediante un cron en el contenedor de devops


### Actualizacion por inflacion

La actualizacion de la inflacion se realiza mediante el script ubicado en `devops/inflacion_update.py`. El mismo toma los datos de un spreadsheet, popula tabla de inflacion y corre los procedures correspondientes.

Se corre mediante un cron en el contenedor de devops

### Cache

Las request que recibe el servidor son cacheadeas, el mismo no se actualiza cuando los datos cambian lo que puede llevar a a confusion, se recomienda al hacer un update manual eliminar el cache actual.
