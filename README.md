# [monitorpresupuestario.acij.org.ar](http://monitorpresupuestario.acij.org.ar/)

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
    ├── api
    ├── app
    └── db
```

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
- El servidor de desarrollo puede levantarse con el comando `npm run start-dev`. Esto levanta un servidor en el puerto
8080. 

## Ambiente prod

Diferencias del ambiente productivo respecto al ambiente de desarrollo:

- Los archivos de webpack son buildeados y minificación usando el comando `npm run dist`.
- El servidor se levanta usando [pm2](https://pm2.keymetrics.io/) para asegurar que siempre esté levantado. Una copia 
del archivo de configuración de pm2 está en `devops/ecosystem.config.js`
- Delante del servidor de node hay un nginx que rutea entre el ambiente productivo y el ambiente de test. una copia 
del archivo de configuración de nginx está en `devops/nginx.conf`

## Datos y configuración

### Tests y lint

npm run test
npm run lint
npm run test:jest

### TODOs

- Proptypes en todos los componentes (+ forzar errores por proptypes?)
- E2E tests
- Mejorar script `npm run download-datasets`. Si alguna descarga falla, reitentar
- Cache de estaticos. Builds con hashs en filenames + cache en nginx
- Newrelic
- Migrar a typescript?
- Resetear index de busqueda despues de una actualización de la db
- Soportar archivos csv separados por ;
- Revisar espacio libre del servidor
- Mejorar config de pm2

## Producción

npm run dist
pm2 config
nginx

