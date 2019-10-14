# Monitor Presupuestario

[monitorpresupuestario.acij.org.ar](http://monitorpresupuestario.acij.org.ar/)

## Setup

### Ambiente y dependencias

El proyecto está hecho utilizando node. Para utilizar la version de node correspondiente
al proyecto, se recomienda utilizar [nvm](https://github.com/nvm-sh/nvm). Una vez instalado
nvm, ejecutar `nvm use` en la carpeta raiz del proyecto para asegurarse de utilizar la
version de node correspondiente. 

Una vez instalado node, se deben instalar las dependencias del proyecto via npm. Ejecutar
`npm install` en la carpeta raiz del proyecto.

### Datos y configuración

Config de googleapis
Descarga de datos

## TODO list

### Site features

- Showcase different graphs or analysis that can draw conclusions from
- Different preloaded analysis to choose from.
- Save locally (using for ex local storage) any custom analysis o comparisions the user creates
- Save locally any custom setting the user changes by either using local storage or cookies 
- Everything the user creates should be shareable in social media
- Webmobile support
- Search inspiration in similar sites
- If there are multiple settings that can be changed at any moment, consider using a sticky header that follows the 
user with settings. It can also be several sticky headers that follow the user only when a specific graph is showing
- Global switch toggle for inflation adjustment 
- Global switch toggle for font size 
- Improve favicon legibility 
- Add link to the google spreadsheet used as DB

### Graphs an analysis

- Histogram of budget amounts
- Histogram of programs, activities or entities 
- Some kind of subentities distribution
- Tell stories both vertically and horizontally. Vertically choosing a hierarchichal entity an analysing it bottom dowm.
Horizontally choosing different or all the entities at the same level and comparing them.
- Venn diagrams to compare the same entity in two different years
- Animated treemap? 

### Development
- Server side rendering react. [Article](https://dev.to/marvelouswololo/how-to-server-side-render-react-hydrate-it-on-the-client-and-combine-client-and-server-routes-1a3p).
[Another article](https://medium.com/front-end-weekly/adding-a-server-side-rendering-support-for-an-existing-react-application-using-express-and-webpack-5a3d60cf9762)
- Pass props to react client
- Process manager for express vs linux service
- Nginx proxy_pass to react server only in /test
- Webpack.
    - Polyfills
    - Analytics
    - Newrelic
- Google spreadsheet integration
- Import components from old site version? [nuxt-buefy](https://buefy.github.io/#/documentation) 
- Import icons from old site version? : Font awesome and Material design icons

### Setup

https://console.developers.google.com/apis/credentials


### Testing and code style

- Eslint integration
- Proptypes
- Unit tests
- E2E tests

## Other links

- [Cuántos ministros tuvo cada presidente](https://www.cronista.com/economiapolitica/Gabinete-corto-o-ampliado-cuantos-ministros-tuvo-cada-presidente-desde-1983-20180904-0033.html)
- Charts: [Recharts](http://recharts.org/en-US), [Nivo](https://nivo.rocks/), [React vis](https://uber.github.io/react-vis/),
[Victory](https://formidable.com/open-source/victory/), [React Charts2](https://github.com/jerairrest/react-chartjs-2)
